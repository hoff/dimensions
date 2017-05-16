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

/**
 * parameters used for creating a box
 */
interface BoxParams {
  width?: number,
  height?: number,
  depth?: number,
  x?: number,
  y?: number,
  z?: number,
  visible?: boolean,
  colorHSL?: {h: number, s: number, l: number},
  add?: boolean,
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewChecked, AfterViewInit {

  @ViewChild('sceneContainer') sceneContainer: ElementRef
  @ViewChild('sidebar') sidebar: ElementRef

  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  controls: OrbitControls

  subject: Subject<any>

  window = window
  sidebarWidth = 300
  sidebarVisible = true

  // LIGHT DIMENSIONS
  lights: {
    directionals: Directional[],
    ambients: Ambient[],
    spots: Spot[],
  } = {
    directionals: [
      {
        name: 'sun',
        position: { x: 3, y: 10, z: 10 },
        color: 0xffffff,
        intensity: 0.7,
      },
      {
        name: 'moon',
        position: { x: -3, y: 10, z: -10 },
        color: 0xffffff,
        intensity: 0.3,
      },
    ],
    ambients: [
      {
        name: 'daylight',
        color: 0xffffff,
        intensity: 0.3,
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
      opacity: 1
    }
  }

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

  ngOnInit() {
  }

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

  /**
   * Set-up Three.js Scene
   */
  sceneSetup(dimensions) {

    // scene
    this.scene = new THREE.Scene()

    // renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    this.renderer.setClearColor(0x111111, dimensions.renderer.opacity)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.setSize(this.sceneContainer.nativeElement.scrollWidth, this.sceneContainer.nativeElement.scrollHeight)
    this.sceneContainer.nativeElement.appendChild(this.renderer.domElement)

    // camera
    this.camera = new THREE.PerspectiveCamera(40, this.sceneContainer.nativeElement.scrollWidth / this.sceneContainer.nativeElement.scrollHeight, 1, 10000)
    this.camera.position.z = 5
    this.camera.fov = 10
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

    /**
     * Subscribe to midi events (test)
     */
    this.midi.stream.subscribe(msg => {
      let boxParams: BoxParams = {
        width: 2,
        x: msg.key - 70,
      }
      this.makeBox(boxParams)
    })

    /** kick off animation loop */
    this.animate()

    /** test box */
    this.makeBox({})
    
  }

  /**
   * Creates a box for, the way you like it...
   * and adds it to the scene by default :)
   */
  makeBox(params: BoxParams) {

    /** Read Params */

    // size
    const width  = params.width  || 1
    const height = params.height || 1
    const depth  = params.depth  || 1

    // position
    const x = params.x || 0
    const y = params.y || 0
    const z = params.z || 0

    // color {hsl}
    const hsl = params.colorHSL || {h: 0, s: 0, l: 1}

    // add
    const add = params.add || true

    /** Create Box */

    // material
    const boxMaterial = new THREE.MeshPhongMaterial()
    boxMaterial.color.setHSL(hsl.h, hsl.s, hsl.l)

    // geometry
    const boxGeometry = new THREE.BoxGeometry(width, width, width)

    // mesh
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)
    boxMesh.position.set(x, y, z)

    // add 
    if (add) {
      this.scene.add(boxMesh)
    }

    return boxMesh
  }

  animate = () => {

    // run hero test
    // this.runHero()

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
