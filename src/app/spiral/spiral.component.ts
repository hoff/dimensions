import { Component, OnInit, AfterViewInit, ViewChild, AfterViewChecked, ElementRef, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

// THREE
import * as THREE from 'three'
import OrbitControls from 'orbit-controls-es6'

// Services
import { MIDIService } from '../midi.service'

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

  subject: Subject<any>

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
        position: { x: 1, y: 10, z: 10 },
        color: 0xffffff,
        intensity: 0.7,
      },
      {
        name: 'moon',
        position: { x: 1, y: 10, z: -10 },
        color: 0xffffff,
        intensity: 0.3,
      },
    ],
    ambients: [
      {
        name: 'daylight',
        color: 0xffffff,
        intensity: 0.1,
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
    running: true,
    time: 10000,
    lights: this.lights,
    zTest: 3,
    renderer: {
      opacity: 0.5
    }
  }



  sidebarVisible = true

  constructor(
    public midi: MIDIService,
  ) {

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

    /**
     * create observable dimensions subject
     */
    this.subject = new Subject()
  }

  /**
   * Setup Scene and add resize listener
   */
  ngAfterViewInit() {
    this.sceneSetup(this.dimensions)
    window.addEventListener('resize', this.onWindowResize, false);
  }

  ngAfterViewChecked() {
    // console.log('view checked')
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
    let mat = new THREE.MeshPhongMaterial({ color: 0xff0000, transparent: true })
    mat.opacity = 0.2
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
      // this.scene.add(mesh)
    }


    this.seed(88)

    this.animate()
  }



  /**
   * create a number of petal seeds, with increasing 'appear at' times
   * 
   * @param count 
   */
  seed(count) {
    for (let p = 0; p < count; p++) {

      let midiKey = p + 21

      let appearAfter = p * 100
      let angle = 31
      // angle = 137.5
      // angle = 270
      let petal = new Petal(this.midi, midiKey, this.subject, appearAfter, this.scene, p * angle + 0.1)
      this.petals.push(petal)
    }
  }

  makeBoxAt(x: number, y: number, z: number) {
    let mat = new THREE.MeshPhongMaterial({ color: randomColor() })
    let geo = new THREE.BoxGeometry(1, 1, 1)
    let mesh = new THREE.Mesh(geo, mat)
    mesh.position.set(x, y, z)
    this.scene.add(mesh)
    return mesh
  }

  animate = () => {

    // forward time if running
    this.dimensions.time += this.dimensions.running ? 15 : 0

    // publish dimensions
    this.subject.next(this.dimensions)

    // render
    this.renderer.render(this.scene, this.camera)

    // repeat
    requestAnimationFrame(this.animate)
  }

}
// end of spiral component


/**
 * Petal
 * 
 * 
 */

export class Petal {

  planes: THREE.Object3D
  originPlaneMesh: THREE.Mesh
  outerPlaneMesh: THREE.Mesh

  anglePercent: number

  constructor(public midi: MIDIService, public midiKey: number, public subject, public appearAfter: number, public scene: THREE.Scene, public angle: number) {

    let baseAngle = this.angle % 360
    this.anglePercent = baseAngle / 360

    // subscribe to dimensions (time is important here)
    this.subject.subscribe(dimensions => {

      this.updateVertices(dimensions)

    })

    // subscribe to MIDI!

    this.midi.stream.filter(msg => msg.key === this.midiKey && msg.name === 'keyup').subscribe(msg => {
      this.outerPlaneMesh.visible = false
    })
    this.midi.stream.filter(msg => msg.key === this.midiKey && msg.name === 'keydown').subscribe(msg => {
      this.outerPlaneMesh.visible = true
      console.log(msg.key)
    })

  }

  computeVertices(dimensions) {

    let age = dimensions.time - this.appearAfter
    if (age < 0) {
      return false
    }

    // TODO make typed dimensions
    let height = 100 / age
    let distance = age / 100 // distance increases by 1 every second

    // origin
    let xOrigin, yOrigin, zOrigin = 0

    // the outer most edge
    let x = cosine(this.angle) * distance
    let y = sine(this.angle) * distance
    let z = height

    // leftie
    let xLeft = cosine(this.angle + 30) * (distance / 2)
    let yLeft = sine(this.angle + 30) * (distance / 2)
    let zLeft = height / 2

    // rightie
    let xRight = cosine(this.angle - 30) * (distance / 2)
    let yRight = sine(this.angle - 30) * (distance / 2)
    let zRight = height / 2

    return [
      new THREE.Vector3(xOrigin, yOrigin, zOrigin),
      new THREE.Vector3(xLeft, yLeft, zLeft),
      new THREE.Vector3(xRight, yRight, zRight),
      new THREE.Vector3(x, y, z),
    ]
  }

  

  
  updateVertices(dimensions) {

    // if we have not appeared yet, stop here
    let age = dimensions.time - this.appearAfter
    if (age < 0) {
      return
    }

    let vertices = this.computeVertices(dimensions)

    if (dimensions.running) {
      this.scene.remove(this.originPlaneMesh)
      this.scene.remove(this.outerPlaneMesh)


      let originPlaneMat = new THREE.MeshPhongMaterial({ color: 0xff0000, side: THREE.DoubleSide })
      originPlaneMat.color.setHSL(this.anglePercent, 0.8, 0.3)

      // compute vertices

      // make plane (origin to center)
      let originPlaneGeo = new THREE.Geometry()
      originPlaneGeo.vertices.push(vertices[0])
      originPlaneGeo.vertices.push(vertices[1])
      originPlaneGeo.vertices.push(vertices[2])

      originPlaneGeo.faces.push(new THREE.Face3(0, 1, 2))
      originPlaneGeo.computeFaceNormals()

      let originPlaneMesh = new THREE.Mesh(originPlaneGeo, originPlaneMat)
      originPlaneMesh.visible = false
      this.originPlaneMesh = originPlaneMesh
      this.scene.add(originPlaneMesh)

      // outer
      // create center-to-outer plane
      let outerPlaneMat = new THREE.MeshPhongMaterial({ color: 0x0000ff, side: THREE.DoubleSide })
      outerPlaneMat.color.setHSL(this.anglePercent, 0.8, 0.5)

      let outerPlaneGeo = new THREE.Geometry()
      outerPlaneGeo.vertices.push(vertices[1])
      outerPlaneGeo.vertices.push(vertices[2])
      outerPlaneGeo.vertices.push(vertices[3])

      outerPlaneGeo.faces.push(new THREE.Face3(0, 1, 2))
      outerPlaneGeo.computeFaceNormals()

      let outerPlaneMesh = new THREE.Mesh(outerPlaneGeo, outerPlaneMat)
      outerPlaneMesh.visible = false
      this.outerPlaneMesh = outerPlaneMesh
      this.scene.add(outerPlaneMesh)

    }
  }

} // END OF PETAL CLASS


// HELPER FUNCTIONS
export function randomColor() {
  return Math.floor(Math.random() * 16777215)
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
