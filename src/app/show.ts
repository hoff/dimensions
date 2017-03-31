import { MIDIService } from './midi.service'

import {
  Scene,
  Renderer,

  // camera
  PerspectiveCamera,
  OrthographicCamera,
  CameraHelper,

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


/**
 * The base class for any show!
 *
 * provides space, lights, camera, etc
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