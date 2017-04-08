import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core'

import { Show } from '../show'
import { MIDIService } from '../midi.service'
import { Observable } from 'rxjs/Observable'

import {
  Scene,
  Renderer,

  // stuff
  Object3D,

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

import { AnimationService } from '../animation.service'

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent extends Show implements AfterViewInit {

  @Input('width') width: number
  @Input('height') height: number

  @ViewChild('sceneContainer') sceneContainer: ElementRef

  ship: Ship

  constructor(
    public midi: MIDIService,
    public animation: AnimationService,
  ) {
    // inherit goodies from Show
    super()
  }

  ngAfterViewInit() {
    /**
     * call your parent (show) setup function
     */
    this.setupShow(this.midi, this.sceneContainer.nativeElement)

    let myKeyCount = 49
    let toTheLeft = 15
    let toTheRight = 12
    let totalKeyCount = myKeyCount + toTheLeft + toTheRight

    for (let i = 0; i < totalKeyCount; i++) {
      let midiNote = i + 20
      let ship = new Ship(this.midi, this.animation, midiNote)
      ship.body.position.x = (i - totalKeyCount / 2) * 1
      this.scene.add(ship.body)
    }

    this.animate()
  }

  animate = () => {
    // required?
    this.controls.update()

    // push a message down the before render stream
    this.animation.beforeRenderSource.next('rendering coming up')


    requestAnimationFrame(this.animate)

    // render
    this.renderer.render(this.scene, this.camera)
  }


  toRadians(angle: number) {
    return angle * (Math.PI / 180);
  }
}

/**
 * A beautiful spacecraft
 * 
 * It knows where it's going, it maintains a velocity Vector3
 * 
 * Thrust is also coming in as a Vector3, which we apply against the current 
 * velocity vector, to arrive at a new velocity (direction and speed)
 */

class Ship {

  body = new Object3D()
  thruster: Mesh
  thrust = 0
  pushBackFactor = 1

  gravityVector = new Vector3(0, -1 / 60, 0)

  velocity = new Vector3(0, 0, 0)

  constructor(
    public midi: MIDIService,
    public animation: AnimationService,
    public midiNote: number,
  ) {
    console.log('Ship constructed.')
    this.build()
    console.log('... and built :)')

    this.midi.stream.subscribe(msg => {
      /* give thrust according to knob */
      if (msg.keyName === 'R1') {
        this.thrust = msg.decimal * 3
        this.thruster.material.opacity = msg.decimal
      } if (msg.keyName === 'R2') {
        this.pushBackFactor = msg.decimal * 3
      } if (msg.keyName === 'R3') {
      }
      if (msg.keyName === 'B1') {
        let kickVector = new Vector3(0.03, 0.3, 0)
        this.velocity.add(kickVector)
      }
      if (msg.keyName === 'B2') {
        let kickVector = new Vector3(-0.04, 0.8, 0)
        this.velocity.add(kickVector)
      }
      if (msg.keyName === 'B3') {
        let kickVector = new Vector3(0, 1.5, 0)
        this.velocity.add(kickVector)
      } if (msg.name === 'keydown') {

        if (msg.key === this.midiNote) {
          if (this.body.position.y > 0) {
            // reset
            this.body.position.y = 0
            this.velocity = new Vector3()
          }

          let kickVector = new Vector3(0, msg.velocity, 0)
          this.velocity.add(kickVector)
        }
      }
    })


    /**
     * Update yourself
     * 
     * - apply velocity vector
     * - apply gravity vector
     */
    this.animation.beforeRenderStream.subscribe(() => {

      let thrustVector = new Vector3(0, this.thrust / 60, 0)

      // add gravity and thrust vector to velocity vector
      this.velocity.add(this.gravityVector).add(thrustVector)

      // apply the new velocity vector to create movement
      this.body.position.add(this.velocity)

      // make sure you don't go into the ground
      if (this.body.position.y < 0) {

        // push back
        let deepnessFactor = (this.body.position.y * -1)
        // push back should also be informed by how deep I'm in the shits
        let pushBack = new Vector3(
          0,
          (this.velocity.y * -1), // * this.pushBackFactor + deepnessFactor,
          0
        )

        pushBack.sub(this.gravityVector)
        this.velocity.add(pushBack)
        //console.log('pushback', pushBack.y, this.velocity.y)
      }

      /*this.body.rotateX(0.001)
      this.body.rotateY(0.001)
      this.body.rotateZ(0.003)*/
    })
  }

  build() {
    let coreGeo = new BoxGeometry(1, 1, 1)
    let coreMat = new MeshPhongMaterial({ color: 0xffdd33 })
    let core = new Mesh(coreGeo, coreMat)

    let thrustGeo = new BoxGeometry(1, 1, 1)
    let thrustMat = new MeshPhongMaterial(
      { color: 0xff0000, transparent: true, opacity: this.thrust }
    )
    let thrust = new Mesh(thrustGeo, thrustMat)
    thrust.position.y = -1

    this.body.add(core)
    this.body.add(thrust)
    this.thruster = thrust

  }

}
