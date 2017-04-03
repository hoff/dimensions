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
  SpotLight,
  SpotLightShadow,
  SpotLightHelper,

  // materials
  MeshBasicMaterial,
  MeshPhongMaterial,

  // color
  Color,

  // universals
  Mesh,
  WebGLRenderer,
  Vector3,

  PCFSoftShadowMap,

} from 'three'
import OrbitControls from 'orbit-controls-es6'


/**
 * The base class for any show!
 *
 * provides space, lights, camera, etc
 */
export class Show {

  controls: any
  jo: any

  el: any
  public midi: MIDIService

  scene: Scene
  camera: PerspectiveCamera | OrthographicCamera
  renderer: WebGLRenderer

  // lights
  lights: any = {}

  directional: DirectionalLight
  ambient: AmbientLight
  spot: SpotLight

  constructor() {
  }

  setupShow(midi: MIDIService, element) {
    this.midi = midi
    this.el = element
    this.scene = new Scene()

    this.renderer = new WebGLRenderer({ alpha: false, antialias: true })
    this.renderer.shadowMapEnabled = true
    this.renderer.shadowMapType = PCFSoftShadowMap
    this.renderer.setSize(this.el.scrollWidth, this.el.scrollHeight)
    this.renderer.shadowMap.enabled = true;

    this.camera = new PerspectiveCamera(75, this.el.scrollWidth / this.el.scrollHeight, 1, 10000)
    this.camera.position.z = 5

    // controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enabled = true;
    this.controls.maxDistance = 1500;
    this.controls.minDistance = 0;

    // lights
    this.ambient = new AmbientLight(0xffab12)
    //this.scene.add(this.ambient)

    this.directional = new DirectionalLight(0xFFFFFF)
    this.directional.position.set(2, 2, 7);
    this.directional.target.position.set(0, 0, 0);
    this.directional.castShadow = true;
    this.directional.shadow.radius = 0.5;
    this.directional.shadow.camera.visible = true
    this.directional.shadowCameraNear = 3
    this.directional.shadowCameraFar = 9

    // try some bindings
    this.directional.shadowBias = 0.0001
    this.directional.shadowMapWidth = 2048
    this.directional.shadowMapHeight = 2048

    this.scene.add(this.directional)

    // spotlight
    this.spot = new SpotLight()
    this.spot.castShadow = true
    this.spot.position.x = -1
    this.spot.position.y = 1
    this.spot.position.z = 3
    const shadow = this.spot.shadow

    this.lights.spot = this.spot
    //this.scene.add(this.spot)

    const spotLightHelper = new SpotLightHelper( this.spot );
    //this.scene.add( spotLightHelper )

    // ambient
    this.ambient = new AmbientLight(0xffffff)
    this.ambient.intensity = 0.2
    this.scene.add(this.ambient)

    const helper = new DirectionalLightHelper(this.directional);
    const camHelper = new CameraHelper(this.directional.shadow.camera);

    //this.scene.add(helper)
    //this.scene.add(camHelper)
  }
}