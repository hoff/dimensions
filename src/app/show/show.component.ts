import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core'


import { Show } from '../show'
import { MIDIService } from '../midi.service'
import { AnimationService } from '../animation.service'

import { Observable } from 'rxjs/Observable'

import {
  Engine,
  Render,
  World,
  Bodies,
} from 'matter-js'


import {
  Scene,
  Renderer,

  // camear
  PerspectiveCamera,
  OrthographicCamera,

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
  @ViewChild('matterContainer') matterContainer: ElementRef

  things: any = {}
  xSpeed = 0

  cmesh: Mesh

  notes = []

  matterEngine: any
  engine: Engine
  matterRender: Render

  constructor(
    public midi: MIDIService,
    public animation: AnimationService,
  ) {
    super()
    this.matterEngine = Engine

  }

  ngOnInit() {

    this.setupShow(this.midi, this.sceneContainer.nativeElement)

    this.sceneContainer.nativeElement.appendChild(this.renderer.domElement)

    // make things
    const geometry = new BoxGeometry(1, 1, 1)
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
    //this.scene.add(paperMesh)

    // advanced cube
    const cubeGeo = new BoxGeometry(1, 1, 1)
    const cubeMat = new MeshPhongMaterial({ color: 0xff0000 })
    const cubeMesh = new Mesh(cubeGeo, cubeMat)
    cubeMesh.position.z = 0.5
    cubeMesh.castShadow = true
    //this.scene.add(cubeMesh)

    // subscribe to inputs
    this.midi.knobs.knob1.observable.subscribe(val => {
      this.xSpeed = (val - 0.5) * 30
    })
    this.midi.knobs.knob2.observable.subscribe(val => {
      const cube: Mesh = this.things.cube
      const newScale = val * 20
      cube.scale.set(newScale, newScale, newScale)
    })

    this.midi.midiMessageObservable.subscribe(message => {
      if (message.name === 'keydown') {
        console.log(message.key)

        for (let note of this.notes) {
          note.position.z = 0.5
        }

        // - 36
        let note = this.notes[message.key - 36]

        this.animateJump(3 * message.velocity).subscribe((val: number) => {
          note.position.z = val
          note.position.y = val * 4

          let scale = val * 4
          note.scale.set(scale, scale, scale)
        })
      }
    })

    



    // kick off animation loop
    this.animate()


    // z-rotation
    this.animation.animateValue('easeInOutQuad', 1000, 0, this.toRadians(360), cubeMesh.rotation, 'z', () => {
      console.log('animation done')
    })

    // subscribe to keys
    let sub = Observable.fromEvent(window, 'keypress').subscribe(event => {

      this.animateJump(3).subscribe((y: number) => {
        console.log('sup', y)
        this.cmesh.position.z = y + 0.5
      })

      this.animation.animateValue('bounce', 1000, 0, -3, cubeMesh.position, 'x', () => {
        console.log('animation done')
      })
    })

    const boxSize = 0.2
    const boxDistance = boxSize / 10

    for (let i = -24; i < 25; i++) {
      const geo = new BoxGeometry(boxSize, boxSize, boxSize)
      const mat = new MeshPhongMaterial({ color: Math.floor(Math.random() * 16777215) })
      const mymesh = new Mesh(geo, mat)
      mymesh.castShadow = true
      mymesh.position.z = (boxSize / 2) + 0.1
      mymesh.position.x = (i * boxSize) + ( i * boxDistance)
      this.scene.add(mymesh)
      this.notes.push(mymesh)
    }

    // making a cube









  }

  /** a parabola, starting at 0 */

  jumpPosition = (height, percent) => {
    let a = -1

    let xOffset = Math.sqrt(height) * -1
    let totalX = xOffset * -2

    let x = (totalX * percent) + xOffset

    return (-1 * (x * x)) + height
  }

  animateJump(height) {

    return new Observable(stream => {
      let durationMS = Math.sqrt(height) * 300 // say 2 becomes 400
      durationMS = 2000
      let start = new Date().getTime()
      let end = start + durationMS
      let step = () => {
        let now = new Date().getTime()
        let progress
        if (now > end) {
          progress = 1
        } else {
          progress = (now - start) / durationMS // percent as decimal
        }
        let y = this.jumpPosition(height, progress)
        stream.next(y)
        if (progress < 1) {
          requestAnimationFrame(step)
        }
      }
      step()
    }).share()
  }

  parabola = (x) => {
    let a = -1
    return a * (x * x)
  }

  animate = () => {
    requestAnimationFrame(this.animate)

    // update cube's position
    const cube: Mesh = this.things.cube
    cube.position.x = cube.position.x + this.xSpeed

    // render
    this.renderer.render(this.scene, this.camera)
  }

  toRadians(angle) {
    return angle * (Math.PI / 180);
  }

  




}
