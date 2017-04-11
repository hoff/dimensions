import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core'

import { Show } from '../show'
import { MIDIService, MIDIMessage } from '../midi.service'
import { AnimationService } from '../animation.service'

import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'


import * as THREE from 'three'

@Component({
  selector: 'app-entertainer',
  template: `
    <h2>the entertainer!</h2>
    <button *ngFor="let song of midi.songList" (click)="midi.playSong( song )">{{ song.name }}</button>

    <div 
      #sceneContainer
      [style.width.px]="width"
      [style.height.px]="height"
      [style.background]="'lime'"
    >
  `,
})
export class EntertainerComponent extends Show implements OnInit, AfterViewInit {

  @Input('width') width: number
  @Input('height') height: number

  @ViewChild('sceneContainer') sceneContainer: ElementRef

  gravityMPS2 = 10
  gravityFactor = 1

  constructor(
    public midi: MIDIService,
    public animation: AnimationService,
  ) {
    // inherit goodies from Show
    super()
  }

  ngOnInit() {
    console.log('entertainer has', this.animation)
    this.midi.stream.subscribe(msg => {
      console.log('msg')
    })
  }

  ngAfterViewInit() {
    this.setupShow(this.midi, this.sceneContainer.nativeElement)
    this.scene.background = new THREE.Color( 0xffffff )

    this.camera.position.set(0, 15, 25)

    let myKeyCount = 49
    let toTheLeft = 15
    let toTheRight = 12
    let totalKeyCount = myKeyCount + toTheLeft + toTheRight

    for (let i = 0; i < totalKeyCount; i++) {
      let midiKey = i + 20

      let x = (i - (totalKeyCount / 2)) * 4 // meter width
      let y = (i - (totalKeyCount / 2)) * 0.2
      let note = new Note(midiKey, this.randomColor(), this.midi, this.animation, this.scene, x, y)
      //this.scene.add(note.base)
    }

    this.animate()
  }

  animate = () => {
    // required?
    this.controls.update()

    // push a message down the before render stream
    this.animation.beforeRenderSource.next('rendering coming up')

    // repeat
    requestAnimationFrame(this.animate)

    // render
    this.renderer.render(this.scene, this.camera)
  }

  randomColor() {
    return Math.floor(Math.random() * 16777215)
  }

}

class Note {

  base: THREE.Mesh

  constructor(
    public midiKey: number,
    public color: number,
    public midi: MIDIService,
    public animation: AnimationService,
    public scene: THREE.Scene,
    public x: number,
    public y: number,
  ) {

    // make yourself a base!
    this.base = this.construct()
    this.base.position.x = x


    this.midi.stream.filter(msg => msg.key === this.midiKey && msg.name === 'keydown')
      .subscribe(msg => {
        this.onKeyDown(msg)
      })

    this.midi.stream.filter(msg => msg.key === this.midiKey && msg.name === 'keyup')
      .subscribe(msg => {
        this.onKeyUp(msg)
      })

  }

  onKeyDown(msg: MIDIMessage) {
    this.fire(msg.velocity)
    this.midi.soundNote(0, msg.key, msg.velocity)
  }

  onKeyUp(msg: MIDIMessage) {
    this.midi.stopNote(0, msg.key, msg.velocity)
  }

  /**
   * create a new vessel, x-position it
   */
  fire(velocity: number) {
    let vessel = new Vessle(this.scene, this.midi, this.animation, this.midiKey, this.color)
    vessel.mesh.position.x = this.x
    vessel.mesh.position.y = this.y
    vessel.fire(velocity * 3)
    this.scene.add(vessel.mesh)
  }

  construct() {
    let baseGeo = new THREE.BoxGeometry(1, 1, 1)
    let baseMat = new THREE.MeshPhongMaterial({ color: this.color })
    return new THREE.Mesh(baseGeo, baseMat)
  }

}

class Vessle {

  animationSubscription: Subscription
  mesh: THREE.Mesh
  initialVelocity: number
  velocity = new THREE.Vector3()


  constructor(
    public scene: THREE.Scene,
    public midi: MIDIService,
    public aniation: AnimationService,
    public key: number,
    public color: number,
  ) {
    let baseGeo = new THREE.BoxGeometry(5, 5, 5)
    let baseMat = new THREE.MeshPhongMaterial({ color: this.color, transparent: true })
    this.mesh = new THREE.Mesh(baseGeo, baseMat)

    /**
     * Listen to your keyup event and react accordingly
     * e.g. start fading
     */
    this.midi.stream.filter(msg => msg.key === this.key && msg.name === 'keyup').take(1).subscribe(msg => {

      this.mesh.material.opacity = 0.1
    })

    /**
     * before each rendering, update you position 
     * by applying all forces acting on the vessle
     */
    this.animationSubscription = this.aniation.beforeRenderStream.subscribe(() => {

      // apply gravity
      let gravityVector = new THREE.Vector3(0, -1 / 60 * 1, 0)
      this.velocity.add(gravityVector)

      let range = this.initialVelocity * 2
      let progress = this.velocity.y 
      let decimal = progress / range
      console.log(decimal)

      this.mesh.material.opacity = decimal + 0.5

      // re-position yourself
      this.mesh.position.add(this.velocity)

      // if you're out of view, remove yourself from scene and render loop
      if (this.mesh.position.y < -20) {
        this.scene.remove(this.mesh)
        this.animationSubscription.unsubscribe()
      }
    })
  }

  fire(velocity: number) {
    this.initialVelocity = velocity
    this.velocity.add(new THREE.Vector3(0, velocity, -1))
  }

}
