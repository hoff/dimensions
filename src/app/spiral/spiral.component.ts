import { Component, OnInit, AfterViewInit, ViewChild, AfterViewChecked, ElementRef, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable'

// THREE
import * as THREE from 'three'
import OrbitControls from 'orbit-controls-es6'


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
        position: { x: 1, y: 1, z: 1 },
        color: 0xfffff,
        intensity: 1,
      },
    ],
    ambients: [
      {
        name: 'daylight',
        color: 0xff0000,
        intensity: 0.2,
      }
    ],
    spots: [
      {
        name: 'bulb',
        color: 0xff0000,
        intensity: 0.2,
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
    this.doResize()
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible
    this.doResize()
  }

  doResize() {
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
    this.makeFlower()
    this.animate()
  }

  clear() {
    for (let thing of this.scene.children) {
      if (thing.userData.toRemove === true) {
        this.scene.remove(thing)
      }
    }
  }

  /**
   * convert degrees to radians 
   */
  toRadians(degrees: number) {
    return degrees * Math.PI / 180
  }

  /**
   * convert radians to degrees
   */
  toDegrees(radians: number) {
    return 180 * radians / Math.PI 
  }


  makeFlower(vectorCount: number = 2) {

    console.log('making', vectorCount)
    this.clear()


    let spiral = new THREE.Object3D()
    spiral.userData.toRemove = true


    // 2D spiral vectors
    // let vectorCount = 100

    let degrees = 10
    let distance = 10

    for (let i = 0; i < vectorCount; i++) {

      console.log('making vertices for degrees', degrees)

      let x: number
      let y: number

      if (degrees % 360 === 90) {
        // 12 //
        x = 0
        y = distance
      } else if (degrees % 360 === 270) {
        // 6 //
        x = 0
        y = -distance
      } else if (degrees % 360 === 0) {
        // 3 //
        x = distance
        y = 0
      } else if (degrees % 360 === 180) {
        // 9 //
        x = -distance
        y = 0
      } else {
        // everything else
        let radians = degrees * Math.PI / 180
        x = Math.cos(radians) * distance
        y = Math.sin(radians) * distance

        console.log('at full distance', distance, 'and', degrees, 'degrees, x is ', x)

        radians = (degrees + 30) * Math.PI / 180
        x = Math.cos(radians) * distance
        console.log('upper should be at', distance, 'and', this.toDegrees(radians), 'degrees, x is ', x)


      }

      // Boxes at position, for debugging
      let geo = new THREE.BoxGeometry(1, 1, 1)
      let mat = new THREE.MeshPhongMaterial({ color: 0xff0000, transparent: true })

      // 2 other petal vertices
      // we have one x and y, need 2 more, the other is zero zero.
      // make a plane between those (later, 2 triangles)
      let radians2 = this.toRadians(degrees + 30)
      let distance2 = distance / 2
      let xA = Math.cos(radians2) * distance2
      let yA = Math.sin(radians2) * distance2

      console.log('at half distance', distance2, 'and', this.toDegrees(radians2), 'degrees, x up is ', xA)

      let mat2 = new THREE.MeshPhongMaterial({ color: 0x0000ff })
      let mesh2 = new THREE.Mesh(geo, mat2)
      mesh2.position.set(xA, yA, 0)

      this.scene.add(mesh2)

      let radians3 = this.toRadians(degrees - 30)
      let xB = Math.cos(radians3) * distance2
      let yB = Math.sin(radians3) * distance2

      let mat3 = new THREE.MeshPhongMaterial({ color: 0x00ffff })

      let mesh3 = new THREE.Mesh(geo, mat3)
      mesh3.position.set(xB, yB, 0)
      this.scene.add(mesh3)

      // plane test
      let planeMat = new THREE.MeshPhongMaterial({color: 0x00ff00 })
      planeMat.side = THREE.DoubleSide
      let planeGeo = new THREE.PlaneGeometry(1, 1)
      planeGeo.vertices[0].set(0, 0, 0)
      planeGeo.vertices[2].set(x, y, 0)
      planeGeo.vertices[3].set(xA, yA, 0)
      planeGeo.vertices[1].set(xB, yB, 0)

      let planeMesh = new THREE.Mesh(planeGeo, planeMat)
      this.scene.add(planeMesh)
      
      
      

      mat.opacity = 0.8
      let mesh = new THREE.Mesh(geo, mat)

      mesh.position.set(x, y, 0)

      //mesh.rotation.z = (10) * Math.PI / 180 // the curent radian
      mesh.rotation.z = (degrees + 45) * Math.PI / 180 // the curent radian

      mesh.position.z = i * 0.01
      mesh.visible = true

      spiral.add(mesh)

      // increase angle and distance
      degrees += 137
      //distance += (0.1 - (i * 0.001)) // reduce over time
      //distance +=  0.1 // (0.1 - (i * 0.00115)) // reduce over time
      distance += 0.1 - (i / 3000)

    }

    this.scene.add(spiral)

  }


  animate = () => {

    // render
    this.renderer.render(this.scene, this.camera)

    // repeat
    requestAnimationFrame(this.animate)
  }

}
