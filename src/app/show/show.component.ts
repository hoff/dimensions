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
    // matter
    this.engine = Engine.create()
    let boxA = Bodies.rectangle(300, 80, 20, 20)
    let boxB = Bodies.rectangle(310, 50, 20, 20)
    let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true })
    World.add(this.engine.world, [boxA, boxB, ground])


    this.matterRender = Render.create({
      element: this.matterContainer.nativeElement,
      engine: this.engine
    })


    //Engine.run(this.engine)

    this.setupShow(this.midi, this.sceneContainer.nativeElement)

    this.sceneContainer.nativeElement.appendChild(this.renderer.domElement)

    // make things
    const geometry = new BoxGeometry(1, 1, 1)
    const material = new MeshPhongMaterial({ color: 0x123123, wireframe: false })
    const mesh = new Mesh(geometry, material)
    mesh.castShadow = true
    this.things.cube = mesh
    this.scene.add(this.things.cube)

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

    // z-rotation
    this.animation.animateValue('easeInOutQuad', 1000, 0, this.toRadians(360), cubeMesh.rotation, 'z', () => {
      console.log('animation done')
    })

    // subscribe to keys
    let sub = Observable.fromEvent(window, 'keypress').subscribe(event => {
      this.animation.animateValue('bounce', 1000, 0, -3, cubeMesh.position, 'x', () => {
        console.log('animation done')
      })
    })

    // ALL ANIMATIONS
    let xOffset = -5
    for (let easingKey in this.animation.EasingFunctions) {

      if (this.animation.EasingFunctions.hasOwnProperty(easingKey)) {
        let value = this.animation.EasingFunctions[easingKey]
        console.log(easingKey)
        console.log(value)

        const cubeGeo = new BoxGeometry(0.7, 0.7, 0.7)
        const cubeMat = new MeshPhongMaterial({ color: Math.floor(Math.random() * 16777215) })
        const cubeMesh = new Mesh(cubeGeo, cubeMat)
        cubeMesh.position.z = 0.5
        cubeMesh.position.x = xOffset
        xOffset += 0.8
        cubeMesh.castShadow = true
        this.scene.add(cubeMesh)

        let backForth = () => this.animation.animateValue(easingKey, 1000, 0, 2, cubeMesh.position, 'y', () => {
          console.log('done')
          this.animation.animateValue(easingKey, 1000, 2, 0, cubeMesh.position, 'y', () => {
            console.log('animation done')
            backForth()
          })
        })
        backForth()

      }
    }

  }

  parabola = (x) => {
    let a = -1
    return a * (x * x)
  }

  animate = () => {
    requestAnimationFrame(this.animate)

    // do your thing
    // update cube's position
    const cube: Mesh = this.things.cube
    cube.position.x = cube.position.x + this.xSpeed

    // update orbit
    // this.controls.update()

    // update matter
    //Engine.update(this.engine, 1000 / 60)
    //Render.run(this.matterRender)
    //this.things.cube.position.y =  this.engine.world.bodies[0].position.y
    //console.log(this.engine.world.bodies[0].position.y)

    // render
    this.renderer.render(this.scene, this.camera)
  }

  toRadians(angle) {
    return angle * (Math.PI / 180);
  }




}
