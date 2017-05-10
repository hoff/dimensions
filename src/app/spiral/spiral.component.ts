import { Component, OnInit, AfterViewInit, ViewChild, AfterViewChecked, ElementRef, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable'

// THREE
import * as THREE from 'three'
import OrbitControls from 'orbit-controls-es6'

// Light interfaces
interface Light {
  name: string,
  color: number,
  intensity: number
}
interface Directional extends Light {
  position: { x: number, y: number, z: number }
}
interface Ambient extends Light {
}
interface Spot {
  name: string
  intensity: number
  color: number
}

@Component({
  selector: 'app-spiral',
  templateUrl: './spiral.component.html',
  styleUrls: ['./spiral.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpiralComponent implements AfterViewInit, AfterViewChecked {

  @ViewChild('sceneContainer') sceneContainer: ElementRef
  @ViewChild('sidebar') sidebar: ElementRef

  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  controls: OrbitControls

  testbox: THREE.Mesh

  // petal container
  petals: Petal[] = []

  window = window
  sidebarWidth = 300

  // LIGHT DIMENSIONS
  lights: {
    directionals: Directional[],
    ambients: Ambient[],
    spots: Spot[],
  } = {
    directionals: [
      {
        name: 'sun',
        position: { x: 1, y: 10, z: -10 },
        color: 0xffffff,
        intensity: 1,
      },
    ],
    ambients: [
      {
        name: 'daylight',
        color: 0xffffff,
        intensity: 0.4,
      }
    ],
    spots: [
      {
        name: 'bulb',
        color: 0xffffff,
        intensity: 0,
      }
    ]
  }

  dimensions = {
    lights: this.lights,
    renderer: {
      opacity: 0.5
    }
  }

  sidebarVisible = true

  constructor() {

    /**
     * Subscribe to keyboard events
     */
    Observable.fromEvent(window, 'keypress').subscribe((event: KeyboardEvent) => {
      console.log(event.which)

      // CMD B: toggle sidebar
      if (event.which === 98 && event.metaKey) {
        this.toggleSidebar()
      }
      // CMD F: request fullscreen
      if (event.which === 102) {
        this.requestFullscreen()
      }
    })
  }



  ngAfterViewInit() {
    this.sceneSetup(this.dimensions)
    window.addEventListener('resize', this.onWindowResize, false);
  }

  ngAfterViewChecked() {
    //console.log('view checked')
  }

  onWindowResize = () => {
    this.resizeScene()
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible
    this.resizeScene()
  }

  /**
   * resize canvas and update camera according to available space
   */
  resizeScene() {
    let availableWidth = this.window.innerWidth - (this.sidebarVisible ? this.sidebarWidth : 0)
    let availableHeight = this.window.innerHeight
    this.camera.aspect = availableWidth / availableHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(availableWidth, availableHeight)
  }

  requestFullscreen() {
    let doc = document.getElementById('screen')
    doc.webkitRequestFullScreen()
  }


  sceneSetup(dimensions) {

    // scene
    this.scene = new THREE.Scene()

    // renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    this.renderer.setClearColor(0xffffee, dimensions.renderer.opacity)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.setSize(this.sceneContainer.nativeElement.scrollWidth, this.sceneContainer.nativeElement.scrollHeight)
    this.sceneContainer.nativeElement.appendChild(this.renderer.domElement)

    // camera
    this.camera = new THREE.PerspectiveCamera(40, this.sceneContainer.nativeElement.scrollWidth / this.sceneContainer.nativeElement.scrollHeight, 1, 10000)
    this.camera.position.z = 5
    this.camera.fov = 60
    this.camera.position.set(0, 17, 26)

    // controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enabled = true
    this.controls.autoRotate = true
    this.controls.maxDistance = 15000
    this.controls.minDistance = 0
    this.controls.autoRotateSpeed = 0
    this.controls.autoRotate = true

    // lights
    for (let light of this.dimensions.lights.directionals) {
      let directional = new THREE.DirectionalLight(light.color, light.intensity)
      directional.position.set(light.position.x, light.position.y, light.position.z)
      this.scene.add(directional)
    }
    for (let light of this.dimensions.lights.ambients) {
      let ambient = new THREE.AmbientLight(light.color, light.intensity)
      this.scene.add(ambient)
    }
    for (let light of this.dimensions.lights.spots) {
      let spot = new THREE.SpotLight(light.color, light.intensity)
      this.scene.add(spot)
    }

    // test
    let mat = new THREE.MeshPhongMaterial({ color: 0xff0000 })
    let geo = new THREE.BoxGeometry(1, 1, 1)
    this.testbox = new THREE.Mesh(geo, mat)
    this.testbox.visible = true
    this.scene.add(this.testbox)

    // performance test
    for (let i = 0; i < 1000; i++) {
      let mat = new THREE.MeshPhongMaterial({ color: 0xff0000 })
      let geo = new THREE.BoxGeometry(1, 1, 1)
      let mesh = new THREE.Mesh(geo, mat)
      mesh.position.x = i * 1.1
      mesh.visible = false
      this.scene.add(mesh)
    }
    // this.makeFlower()

    // try to make a petal!

    for (let pCount = 1; pCount < 29; pCount ++) {
      let petal = new Petal(this.scene, pCount * 137.5, 10 + (pCount * 0.5))
      this.petals.push(petal)
    }

    

    this.animate()
  }

  growPetals(time: number) {
    for (let petal of this.petals) {
      petal.growTo(time)
    }
  }

  clearFlower() {
    for (let thing of this.scene.children) {
      if (thing.userData.flower === true) {
        this.scene.remove(thing)
      }
    }
  }

  /**
   * degrees -> radians
   */
  toRadians(degrees: number) {
    return degrees * Math.PI / 180
  }

  /**
   * radians -> degrees
   */
  toDegrees(radians: number) {
    return 180 * radians / Math.PI
  }

  /**
   * Returns the 4 basic vertices of a Petal
   * in the order: origin | left | right | outer
   * 
   * @param degrees The angle the petal points towards
   * @param distance The distance of the petal's outer edge
   */
  petalVertices(degrees: number, distance: number, tempz: number) {

    // origin
    let xOrigin, yOrigin, zOrigin = 0

    // the outer most edge
    let x = this.cosine(degrees) * distance
    let y = this.sine(degrees) * distance
    let z = tempz

    // leftie
    let xLeft = this.cosine(degrees + 30) * (distance / 2)
    let yLeft = this.sine(degrees + 30) * (distance / 2)
    let zLeft = tempz

    // rightie
    let xRight = this.cosine(degrees - 30) * (distance / 2)
    let yRight = this.sine(degrees - 30) * (distance / 2)
    let zRight = tempz

    return [
      new THREE.Vector3(xOrigin, yOrigin, zOrigin),
      new THREE.Vector3(xLeft, yLeft, zLeft),
      new THREE.Vector3(xRight, yRight, zRight),
      new THREE.Vector3(x, y, z),
    ]
  }

  sine(degrees: number) {
    return Math.sin(this.toRadians(degrees))
  }
  cosine(degrees: number) {
    return Math.cos(this.toRadians(degrees))
  }
  tan(degrees: number) {
    return Math.tan(this.toRadians(degrees))
  }

  randomColor() {
    return Math.floor(Math.random() * 16777215)
  }

  makeBoxAt(x: number, y: number, z: number) {
    let mat = new THREE.MeshPhongMaterial({ color: this.randomColor() })
    let geo = new THREE.BoxGeometry(1, 1, 1)
    let mesh = new THREE.Mesh(geo, mat)
    mesh.position.set(x, y, z)
    this.scene.add(mesh)
    return mesh
  }


  /**
   * create a flower with a given petal count
   */
  makeFlower(petalCount: number = 5, outFactor: number = 100) {

    let flower = new THREE.Object3D()
    flower.userData.flower = true

    let startingDegrees = 1
    let distance = 10

    this.clearFlower()

    for (let petalIndex = 0; petalIndex < petalCount; petalIndex++) {

      // get the angle fo the petal
      let currentAngle = startingDegrees + (137.508 * petalIndex)

      // generate vertices for the petal // TODO: make outFactor (currently 100) a dimension
      let currentDistance = (distance * petalIndex / outFactor) + distance
      let vertices = this.petalVertices(currentAngle, currentDistance, petalIndex / 10)

      // create a petal grouping object
      let petal = new THREE.Object3D()

      // create origin-to-center part
      let originPlaneMat = new THREE.MeshPhongMaterial({ color: 0x123456, side: THREE.DoubleSide })

      let originPlaneGeo = new THREE.Geometry()
      originPlaneGeo.vertices.push(vertices[0])
      originPlaneGeo.vertices.push(vertices[1])
      originPlaneGeo.vertices.push(vertices[2])

      originPlaneGeo.faces.push(new THREE.Face3(0, 1, 2))
      originPlaneGeo.computeFaceNormals()

      let originPlaneMesh = new THREE.Mesh(originPlaneGeo, originPlaneMat)

      // add origin-to-center part to petal
      petal.add(originPlaneMesh)


      // 2


      // create center-to-outer part
      let outerPlaneMat = new THREE.MeshPhongMaterial({ color: this.randomColor(), side: THREE.DoubleSide })

      let outerPlaneGeo = new THREE.Geometry()
      outerPlaneGeo.vertices.push(vertices[1])
      outerPlaneGeo.vertices.push(vertices[2])
      outerPlaneGeo.vertices.push(vertices[3])

      outerPlaneGeo.faces.push(new THREE.Face3(0, 1, 2))
      outerPlaneGeo.computeFaceNormals()

      let outerPlaneMesh = new THREE.Mesh(outerPlaneGeo, originPlaneMat)

      // add center-to-outer part to petal
      petal.add(outerPlaneMesh)

      // add petal to flower
      flower.add(petal)



      // for debugging, make a box at each corner
      for (let vertex of vertices) {
        // this.makeBoxAt(vertex.x, vertex.y, vertex.z)
      }

      // add flower to scene
      this.scene.add(flower)

    }


    for (let i = 0; i < 0; i++) {
      // distance += (0.1 - (i * 0.001)) // reduce over time
      distance += 0.1 - (i / 3000)

    }
  }


  animate = () => {

    // render
    this.renderer.render(this.scene, this.camera)

    // repeat
    requestAnimationFrame(this.animate)
  }

}
// end of spiral component

export class Petal {

  planes: THREE.Object3D

  constructor(public scene: THREE.Scene, public angle: number = 1, public distance: number = 10, height: number = 10) {
    this.makePlanes()
  }

  computeVertices() {

    let height = this.distance / -2

    // origin
    let xOrigin, yOrigin, zOrigin = 0

    // the outer most edge
    let x = cosine(this.angle) * this.distance
    let y = sine(this.angle) * this.distance
    let z = height

    // leftie
    let xLeft = cosine(this.angle + 30) * (this.distance / 2)
    let yLeft = sine(this.angle + 30) * (this.distance / 2)
    let zLeft = height / 2

    // rightie
    let xRight = cosine(this.angle - 30) * (this.distance / 2)
    let yRight = sine(this.angle - 30) * (this.distance / 2)
    let zRight = height / 2

    return [
      new THREE.Vector3(xOrigin, yOrigin, zOrigin),
      new THREE.Vector3(xLeft, yLeft, zLeft),
      new THREE.Vector3(xRight, yRight, zRight),
      new THREE.Vector3(x, y, z),
    ]
  }

  makePlanes() {
    this.scene.remove(this.planes)
    this.planes = new THREE.Object3D()

    // create origin-to-center part
    let originPlaneMat = new THREE.MeshPhongMaterial({ color: 0x123456, side: THREE.DoubleSide })

    let vertices = this.computeVertices()

    let originPlaneGeo = new THREE.Geometry()
    originPlaneGeo.vertices.push(vertices[0])
    originPlaneGeo.vertices.push(vertices[1])
    originPlaneGeo.vertices.push(vertices[2])

    originPlaneGeo.faces.push(new THREE.Face3(0, 1, 2))
    originPlaneGeo.computeFaceNormals()

    let originPlaneMesh = new THREE.Mesh(originPlaneGeo, originPlaneMat)

    // add origin-to-center part to petal
    this.planes.add(originPlaneMesh)

    // 2 //

    // create center-to-outer part
    let outerPlaneMat = new THREE.MeshPhongMaterial({ color: 0x987654, side: THREE.DoubleSide })

    let outerPlaneGeo = new THREE.Geometry()
    outerPlaneGeo.vertices.push(vertices[1])
    outerPlaneGeo.vertices.push(vertices[2])
    outerPlaneGeo.vertices.push(vertices[3])

    outerPlaneGeo.faces.push(new THREE.Face3(0, 1, 2))
    outerPlaneGeo.computeFaceNormals()

    let outerPlaneMesh = new THREE.Mesh(outerPlaneGeo, originPlaneMat)

    // add center-to-outer part to planes
    this.planes.add(outerPlaneMesh)

    // add plane group to scene
    this.scene.add(this.planes)
  }

  /** 
   * determine the new distance
   * re-calculate vertices
   */
  growTo(time: number) {
    this.distance = time
    this.makePlanes()
  }

}

export function sine(degrees: number) {
  return Math.sin(toRadians(degrees))
}

export function cosine(degrees: number) {
  return Math.cos(toRadians(degrees))
}

export function tan(degrees: number) {
  return Math.tan(toRadians(degrees))
}

/**
 * degrees -> radians
 */
export function toRadians(degrees: number) {
  return degrees * Math.PI / 180
}

/**
 * radians -> degrees
 */
export function toDegrees(radians: number) {
  return 180 * radians / Math.PI
}
