import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core'


import { Show } from '../show'
import { MIDIService } from '../midi.service'
import { AnimationService } from '../animation.service'

import { Observable } from 'rxjs/Observable'


import {
  Scene,
  Renderer,

  // camear
  PerspectiveCamera,
  OrthographicCamera,
  //OrbitControls,

  // geometries
  PlaneGeometry,
  BoxGeometry,
  SphereGeometry,

  // Light
  AmbientLight,
  DirectionalLight,

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

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent extends Show implements OnInit {

  @Input('show') show // not in use

  @ViewChild('sceneContainer') sceneContainer: ElementRef

  things: any = {}
  xSpeed = 0

  constructor(
    public midi: MIDIService,
    public animation: AnimationService,
  ) {
    super()
  }

  ngOnInit() {
    this.setupShow(this.midi, this.sceneContainer.nativeElement)

    this.sceneContainer.nativeElement.appendChild(this.renderer.domElement)

    // make things
    const geometry = new BoxGeometry(300, 300, 300)
    const material = new MeshPhongMaterial({ color: 0x123123, wireframe: false })
    const mesh = new Mesh(geometry, material)
    mesh.castShadow = true
    this.things.cube = mesh
    //this.scene.add(this.things.cube)

    // make paper
    const paperGeo = new PlaneGeometry(7, 7)
    const paperMaterial = new MeshPhongMaterial({ color: 0xffffff })
    const paperMesh = new Mesh(paperGeo, paperMaterial)
    paperMesh.receiveShadow = true
    this.scene.add(paperMesh)

    // advanced cube
    const cubeGeo = new BoxGeometry(1, 1, 1)
    const cubeMat = new MeshPhongMaterial({ color: 0xff0000 })
    const cubeMesh = new Mesh(cubeGeo, cubeMat)
    cubeMesh.position.z = 0.5
    cubeMesh.castShadow = true
    this.scene.add(cubeMesh)

    // subscribe to inputs
    this.midi.knobs.knob1.observable.subscribe(val => {
      this.xSpeed = (val - 0.5) * 30
    })
    this.midi.knobs.knob2.observable.subscribe(val => {
      const cube: Mesh = this.things.cube
      const newScale = val * 20
      cube.scale.set(newScale, newScale, newScale)
    })

    // directional light position
    this.midi.knobs.knob5.observable.subscribe(val => {
      this.directional.position.x = (val - 0.5) * 1000
    })

    // kick off animation loop
    this.animate()
    this.animation.animateValue('easeInOutQuad', 1000, 0, 3, cubeMesh.position, 'x', () => {
      console.log('animation done')
    })
    this.animation.animateValue('easeInOutQuad', 1000, 0, this.toRadians(360), cubeMesh.rotation, 'z', () => {
      console.log('animation done')
    })

    // subscribe to keys
    let sub = Observable.fromEvent(window, 'keypress').subscribe(event => {
      this.animation.animateValue('bounce', 1000, 0, -3, cubeMesh.position, 'x', () => {
        console.log('animation done')
      })
    })

  }

  animate = () => {
    requestAnimationFrame(this.animate)

    // do your thing
    // update cube's position
    const cube: Mesh = this.things.cube
    cube.position.x = cube.position.x + this.xSpeed

    // update orbit
    // this.controls.update()

    // render
    this.renderer.render(this.scene, this.camera)
  }

  toRadians(angle) {
    return angle * (Math.PI / 180);
  }




}
