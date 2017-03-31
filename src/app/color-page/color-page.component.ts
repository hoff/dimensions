import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'

import { MIDIService } from '../midi.service'

import {
  Scene,
  Renderer,

  // camera
  PerspectiveCamera,
  OrthographicCamera,
  //OrbitControls,
  CameraHelper,

  // controls


  // geometries
  BoxGeometry,
  SphereGeometry,

  // Light
  AmbientLight,
  DirectionalLight,
  DirectionalLightHelper,

  // materials
  MeshBasicMaterial,
  MeshPhongMaterial,

  // color
  Color,

  // universals
  Mesh,
  WebGLRenderer,
  Vector3,

} from 'three'

import OrbitControls from 'orbit-controls-es6'


@Component({
  selector: 'app-color-page',
  templateUrl: './color-page.component.html',
  styleUrls: ['./color-page.component.css']
})
export class ColorPageComponent implements OnInit {

  @ViewChild('sceneContainer') sceneContainer: ElementRef
  @ViewChild('demo1') demo1: ElementRef


  hueDecimal = 0.5
  satDecimal = 0.8
  lightDecimal = 0.5

  // knob defaults
  knob1Decimal = 0
  knob2Decimal = 0.5

  // THREE
  scene: Scene
  camera: PerspectiveCamera | OrthographicCamera
  renderer: WebGLRenderer

  // controls
  controls: any

  // lights
  directional: DirectionalLight
  ambient: AmbientLight

  // things
  things: any = {}

  // knob variables (maybe make programs?)
  scaleDecimal = 2
  moveXDecimal = 0


  constructor(
    private midi: MIDIService,
  ) {
    this.midi.knobs.knob1.observable.subscribe(decimal => {
      this.hueDecimal = decimal
      this.knob1Decimal = decimal
    })
    this.midi.knobs.knob2.observable.subscribe(decimal => {
      this.satDecimal = decimal
    })
    this.midi.knobs.knob3.observable.subscribe(decimal => {
      this.lightDecimal = decimal
    })
    this.midi.knobs.knob4.observable.subscribe(decimal => {
      this.scaleDecimal = decimal
    })
    this.midi.knobs.knob5.observable.subscribe(decimal => {
      this.moveXDecimal = decimal
    })
  }

  ngOnInit() {
  }

  hslString() {
    const hue = 360 * this.hueDecimal
    const sat = 100 * this.satDecimal + '%'
    const light = 100 * this.lightDecimal + '%'
    return `hsl(${hue}, ${sat}, ${light})`
  }

}

/**
 * SHOWWWWWWWWW
 *
 * The base class for a show
 *
 * provides a scene, camera, and light
 */

export class Show {

  controls: any

  el: any
  public midi: MIDIService

  scene: Scene
  camera: PerspectiveCamera | OrthographicCamera
  renderer: WebGLRenderer
  // lights
  directional: DirectionalLight
  ambient: AmbientLight

  constructor() {
  }

  setupShow(midi: MIDIService, element) {
    this.midi = midi
    this.el = element
    this.scene = new Scene()

    this.renderer = new WebGLRenderer({ alpha: false })
    this.renderer.shadowMapEnabled = true
    this.renderer.setSize(this.el.scrollWidth, this.el.scrollHeight)
    this.renderer.shadowMap.enabled = true;

    this.camera = new PerspectiveCamera(75, this.el.scrollWidth / this.el.scrollHeight, 1, 10000)
    this.camera.position.z = 1000

    // controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enabled = true;
    this.controls.maxDistance = 1500;
    this.controls.minDistance = 0;

    // lights
    this.ambient = new AmbientLight(0xffab12)
    //this.scene.add(this.ambient)

    this.directional = new DirectionalLight(0xFFFFFF)
    this.directional.position.set(300, 300, 500);
    this.directional.target.position.set(0, 0, 0);
    this.directional.castShadow = true;
    this.directional.shadow.camera.visible = true
    //this.directional.shadowDarkness = 0.5;
    //this.directional.shadowCameraVisible = true; 
    this.scene.add(this.directional)

    const helper = new DirectionalLightHelper(this.directional);
    const camHelper = new CameraHelper(this.directional.shadow.camera);

    this.scene.add(helper)
    //this.scene.add(camHelper)
  }
}


