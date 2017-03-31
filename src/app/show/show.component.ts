import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core'

// move show to it's own file show.ts
import { Show } from '../show'
import { MIDIService } from '../midi.service'

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
    this.scene.add(this.things.cube)

    // make paper
    const paperGeo = new PlaneGeometry(600, 600)
    const paperMaterial = new MeshPhongMaterial({color: 0xeeffcc })
    const paperMesh = new Mesh(paperGeo, paperMaterial)
    paperMesh.receiveShadow = true
    this.scene.add(paperMesh)

    // advanced cube
    const cubeGeo = new BoxGeometry(400, 400, 400)
    const cubeMat = new MeshPhongMaterial({ color: 0xff0000 })
    const cubeMesh = new Mesh(cubeGeo, cubeMat)
    cubeMesh.position.x = 300
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
  }

  animate = () => {
    requestAnimationFrame(this.animate)

    // do your thing
    // update cube's position
    const cube: Mesh = this.things.cube
    cube.position.x = cube.position.x + this.xSpeed

    // update orbit
    this.controls.update()

    // render
    this.renderer.render(this.scene, this.camera)
  }

}
