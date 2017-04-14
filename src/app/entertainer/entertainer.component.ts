import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core'

import { Show } from '../show'
import { MIDIService, MIDIMessage } from '../midi.service'
import { AnimationService } from '../animation.service'

import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import { last } from 'rxjs/Operator/last'


import * as THREE from 'three'

@Component({
  selector: 'app-entertainer',
  template: `
    <h2>the entertainer!</h2>
    <flex-row *ngIf="0">
    
    <flex-col *ngFor="let key of baseNotes" style="width: 200px;">

    <div [style.background-color]="'rgb(' + noteColors[friends[key][0]][0] + ',' + noteColors[friends[key][0]][1] + ',' + noteColors[friends[key][0]][2] + ')'">
      dominant ( {{ friends[key][0] }})
    </div>
    
    <div [style.height.px]="100" [style.background-color]="'rgb(' + noteColors[key][0] + ',' + noteColors[key][1] + ',' + noteColors[key][2] + ')'">
      <h2>{{ key }}</h2>
    </div>
    <div [style.background-color]="'rgb(' + noteColors[friends[key][1]][0] + ',' + noteColors[friends[key][1]][1] + ',' + noteColors[friends[key][1]][2] + ')'">
      third ( {{ friends[key][1] }})
    </div>

    </flex-col>

    </flex-row>



    <br><br>  
colors: 
    

    <div *ngFor="let color of colorsRGB">

      <div [style.background-color]="'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')'">
      jo <span *ngIf="color[3]">{{ color [3] }}</span>
      </div>
    </div>

    gravity <input type="range" min="-10" max="10" [value]="gravityFactor" 
      (input)="setDimension('gravity', $event.target.value)" step="0.5"/> {{ dimensions.gravity }}

      kick <input type="range" min="-10" max="10" [value]="dimensions.kick" 
      (input)="setDimension('kick', $event.target.value)" step="0.5"/> {{ dimensions.kick }}

      boxSize <input type="range" min="-10" max="30" [value]="dimensions.boxSize" 
      (input)="setDimension('boxSize', $event.target.value)" step="0.5"/> {{ dimensions.boxSize }}

      spread <input type="range" min="0" max="10" [value]="dimensions.spread" 
      (input)="setDimension('spread', $event.target.value)" step="0.5"/> {{ dimensions.spread }}
      
<br>

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

  dimensions = {
    gravity: 1,
    kick: 1,
    boxSize: 1,
    spread: 2,
  }

  colors = []
  colorsRGB = [
    [255, 59, 48, 'G'],
    [255, 149, 0, 'F'],
    [255, 204, 0, 'E'],
    [76, 217, 100, 'D'],
    [90, 200, 250, 'C'],
    [52, 170, 220, 'B'],
    [88, 86, 214, 'A'],
    [255, 59, 48, 'G'],
    [255, 149, 0, 'F'],
    [255, 204, 0, 'E'],
    [76, 217, 100, 'D'],
    [90, 200, 250, 'C'],
    [52, 170, 220, 'B'],
    [88, 86, 214, 'A'],
  ]

  noteColors = {
    a: [88, 86, 214],
    b: [52, 170, 220],
    c: [90, 200, 250],
    d: [76, 217, 100],
    'd#': [76, 255, 100], // todo
    e: [255, 204, 0],
    f: [255, 149, 0],
    'f#': [255, 100, 0],
    g: [255, 59, 48],
    'g#1': [255, 59, 100],
    'g#2': [255, 59, 100],
    'g#3': [255, 59, 100],

  }

  baseNotes = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  friends = {
    a: ['e', 'c'],
    b: ['f#', 'd#'],
    c: ['g', 'e'],
    d: ['a', 'f#'],
    e: ['b', 'g#'],
    f: ['c', 'a'],
    g: ['d', 'b']
  }

  constructor(
    public midi: MIDIService,
    public animation: AnimationService,
  ) {
    // inherit goodies from Show
    super()
    for (let i = 0; i < 12; i++) {
      this.colors.push('#abcdef')
    }
  }

  setDimension(dimension, value) {
    this.dimensions[dimension] = parseFloat(value)
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.setupShow(this.midi, this.sceneContainer.nativeElement)
    this.scene.background = new THREE.Color(0xffffff)

    this.camera.position.set(0, 15, 25)

    let myKeyCount = 49
    let toTheLeft = 15
    let toTheRight = 12
    let totalKeyCount = myKeyCount + toTheLeft + toTheRight

    for (let i = 0; i < totalKeyCount; i++) {
      let midiKey = i + 20

      let x = (i - (totalKeyCount / 2)) * 1 // meter width
      let y = (i - (totalKeyCount / 2)) * 0.2
      let note = new Note(this, midiKey, this.randomColor(), this.midi, this.animation, this.scene, x, y)
      this.scene.add(note.base)
    }

    this.animate()
  }

  animate = () => {
    // required?
    this.controls.update()

    // push a message down the before render stream
    // push current dimensions down the stream.
    this.animation.beforeRenderSource.next(this.dimensions)

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
  dimensions

  constructor(
    public show: EntertainerComponent,
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
    this.base.position.y = Math.sin(x / 10) * 5


    // on my key -> down
    this.midi.stream.filter(msg => msg.key === this.midiKey && msg.name === 'keydown')
      .subscribe(msg => {
        this.onKeyDown(msg)
      })

    // on my key -> up
    this.midi.stream.filter(msg => msg.key === this.midiKey && msg.name === 'keyup')
      .subscribe(msg => {
        this.onKeyUp(msg)
      })

    // on ANY key down
    this.midi.stream.filter(msg => msg.name === 'keydown')
      .subscribe(msg => {
        this.hotload(msg)
      })

    // try to read the latest value from render stream
    this.animation.beforeRenderStream.subscribe((dimensions) => {
      this.dimensions = dimensions
    })

  }

  onKeyDown(msg: MIDIMessage) {
    this.fire(msg.velocity)
    this.hotload(msg)
    this.midi.soundNote(0, msg.key, msg.velocity)
  }

  onKeyUp(msg: MIDIMessage) {
    this.midi.stopNote(0, msg.key, msg.velocity)
  }

  /**
   * create a new vessel, x-position it
   */
  fire(velocity: number) {

    let color = this.show.colors[this.midiKey % 12]

    let vessel = new Vessle(this.scene, this.midi, this.animation, this.midiKey, parseInt(color.replace('#', ''), 16), this.dimensions.boxSize)
    vessel.mesh.position.x = this.x * this.dimensions.spread
    vessel.mesh.position.y = this.y
    vessel.mesh.rotateX(0.1)

    vessel.fire(velocity * 3 * this.dimensions.kick)
    this.scene.add(vessel.mesh)

  }

  /**
   * Hotload youself, depending on your relation to the pressed key.
   * if you are 7 higher
   * 
   * 
   */
  hotload(msg: MIDIMessage) {
    // tell me if I am either a multiple. 
    // if I am 4 below, have him as my sub
    // if I am 7, I have him as my dominant.
    if (msg.key % 12 === this.midiKey % 12) {
      this.base.scale.set(2, 2, 2)
    } else if (msg.key % 12 === (this.midiKey % 12) - 4) {
      this.base.rotateX(0.2)
    }
    
  }

  /** make note base */
  construct() {
    let baseGeo = new THREE.BoxGeometry(1, 1, 5)
    console.log(this.show.colorsRGB)
    let color: any = this.show.colorsRGB[this.midiKey % 8]
    let baseMat = new THREE.MeshPhongMaterial({ color: this.color })
    baseMat.color.setRGB(color[0] / 255, color[1] / 255, color[2] / 255)
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
    public size: number,
  ) {
    let baseGeo = new THREE.BoxGeometry(size, size, size)
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
     * 
     * here, we could stick the dimensions in!
     */
    this.animationSubscription = this.aniation.beforeRenderStream.subscribe((dimensions) => {

      // console.log(dimensions.gravity)

      // apply gravity
      let gravityVector = new THREE.Vector3(0, (-1 / 60) * dimensions.gravity, 0)
      this.velocity.add(gravityVector)

      let range = this.initialVelocity * 2
      let progress = this.velocity.y
      let decimal = progress / range
      // console.log(decimal)

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
