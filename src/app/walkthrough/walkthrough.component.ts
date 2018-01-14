import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { Show } from '../show'
import { MIDIService } from '../midi.service'
import { AnimationService } from '../animation.service'

import * as THREE from 'three'

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.component.html',
  styleUrls: ['./walkthrough.component.css']
})
export class WalkthroughComponent implements OnInit {

  frame = 0
  show: Show
  @ViewChild('container') container: ElementRef

  constructor(
    public midi: MIDIService,
    public animation: AnimationService,
  ) { 
    this.show = new Show()
  }

  ngOnInit() {

    this.show.setupShow(this.midi, this.container.nativeElement)

    // create a box for each midi key!
    for (let i = 22; i < 77; i++) {
      // let box = new Box(this.animation, this.show.scene, i)
    }
    // kick off rendering
    this.animate()

    this.animation.beforeRenderStream.subscribe(() => {

    })

    this.midi.stream.subscribe(msg => {
      console.log(msg.key)
      new Box(this.animation, this.show.scene, msg.key)
    })

    // create wave parts
    for (let i = 0; i <= 360; i += 10) {
      new WaveElement(i, this.show.scene, this.midi, this.animation)
    }

  }

  animate = () => {

    // push a message down the before render stream
    this.frame += 1
    this.animation.beforeRenderSource.next(this.frame)
    
    // render
    this.show.renderer.render(this.show.scene, this.show.camera)
    
    // repeat!
    requestAnimationFrame(this.animate)
  
  }

}

class Box {

  herz = 1 // one cycle per second
  mesh: THREE.Mesh

  xPosition: number
  frequency: number

  constructor(
    public animation: AnimationService,
    public scene: THREE.Scene,
    public midiNumber: number,
  ) {


    let mat = new THREE.MeshPhongMaterial()
    let geo = new THREE.BoxGeometry(0.1, 0.1, 0.1 )
    this.mesh = new THREE.Mesh(geo, mat)

    let exponent = ((this.midiNumber - 21)/12)
    this.frequency = 27.5 * Math.pow(2, exponent)

    this.xPosition = Math.log2(this.frequency)

    console.log(this.frequency, this.xPosition)

    this.scene.add(this.mesh)
    this.animation.beforeRenderStream.subscribe(frame => {
      this.updatePosition(frame)
    })

  }

  updatePosition(frame: number) {

    // move 1 / 60th of the say, sine style.
    this.mesh.position.set(this.xPosition, 0.01 * Math.sin(frame * (this.frequency * 0.001)), 0)
  }

}


function toRadians (angle) {
  return angle * (Math.PI / 180);
}

class Wave {
  constructor(wavelength: number) {

  }
  // make 18 blocks. each has a degree. 
  // the height is 
}

class WaveElement {

  mesh: THREE.Mesh
  maxDisplacement: number
  constructor (
    public degree: number,
    public scene: THREE.Scene,
    public midi: MIDIService,
    public animation: AnimationService,
  ) {
    // position yourself

    // find max displacement (becomes amplitude)

    // each frame: apply sin function!
    this.setup()
  }

  setup() {
    let mat = new THREE.MeshPhongMaterial()
    let geo = new THREE.BoxGeometry(0.9, 0.3, 1 )
    this.mesh = new THREE.Mesh(geo, mat)

    // x needs to be determined differently.
    this.mesh.position.x = (this.degree - 90) / 10

    this.maxDisplacement = Math.sin(toRadians(this.degree)) * 6

    this.scene.add(this.mesh)

    this.animation.beforeRenderStream.subscribe(frame => {
      let newY = this.maxDisplacement * Math.sin(frame / 10)
      this.mesh.position.y = newY
    })
  }

  

}
