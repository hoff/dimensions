// Angular
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core'

// Three
import * as THREE from 'three'
import OrbitControls from 'orbit-controls-es6'

// Services
import { MIDIService } from '../midi.service'
import { AnimationService } from '../animation.service'

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent implements AfterViewInit {

  @ViewChild('sceneContainer') sceneContainer: ElementRef

  // scene, camera, renderer
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera | THREE.OrthographicCamera
  renderer: THREE.WebGLRenderer
  // orbit controls
  controls: any
  // lights
  directional: THREE.DirectionalLight
  ambient: THREE.AmbientLight
  spot: THREE.SpotLight

  // keyboard
  keyboard: Keyboard

  // timer
  lastFrameAt: number = new Date().getTime()
  fps: number
  warnings = []

  constructor(
    public midi: MIDIService,
    public animation: AnimationService,
  ) { }

  ngAfterViewInit() {
    /** set up the scene */
    this.sceneSetup()
    /** make keyboard */
    this.keyboard = new Keyboard(this.scene, 'piano', 88)
    this.keyboard.setup(this.midi)
    /** kick off animation loop */
    this.animate()
  }

  sceneSetup() {
    /** make a scene! */
    this.scene = new THREE.Scene()

    this.renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true })
    this.renderer.setClearColor(0xffffff, 1)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.setSize(this.sceneContainer.nativeElement.scrollWidth, this.sceneContainer.nativeElement.scrollHeight)
    this.renderer.shadowMap.enabled = true;

    this.sceneContainer.nativeElement.appendChild(this.renderer.domElement)

    this.camera = new THREE.PerspectiveCamera(40, this.sceneContainer.nativeElement.scrollWidth / this.sceneContainer.nativeElement.scrollHeight, 1, 10000)
    this.camera.position.z = 5
    this.camera.fov = 60
    this.camera.position.set(0, 17, 26)

    // controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enabled = true;
    this.controls.autoRotate = true
    this.controls.maxDistance = 1500;
    this.controls.minDistance = 0;
    this.controls.autoRotate = false


    // lights

    this.directional = new THREE.DirectionalLight(0xFFFFFF, 1)
    this.directional.position.set(2, 10, 7);
    this.directional.target.position.set(0, 0, 0);
    this.directional.castShadow = true;
    this.directional.shadow.radius = 0.5;
    this.directional.shadow.camera.visible = true
    this.directional.shadowCameraNear = 3
    this.directional.shadowCameraFar = 9

    // try some bindings
    this.directional.shadowBias = 0.0001
    this.directional.shadowMapWidth = 100
    this.directional.shadowMapHeight = 1000

    this.scene.add(this.directional)

    // spotlight
    this.spot = new THREE.SpotLight()
    this.spot.castShadow = true
    this.spot.position.x = -1
    this.spot.position.y = 4
    this.spot.position.z = 3
    const shadow = this.spot.shadow

    // this.scene.add(this.spot)

    const spotLightHelper = new THREE.SpotLightHelper(this.spot);
    //this.scene.add( spotLightHelper )

    // ambient
    this.ambient = new THREE.AmbientLight(0xff0000)
    this.ambient.intensity = 0
    this.scene.add(this.ambient)

    const helper = new THREE.DirectionalLightHelper(this.directional);
    const camHelper = new THREE.CameraHelper(this.directional.shadow.camera);

    // this.scene.add(helper)
    //this.scene.add(camHelper)
  }

  animate = () => {
    // take the current time
    let now = new Date().getTime()
    let passed = now - this.lastFrameAt
    this.fps = Math.round(1000 / passed)
    this.lastFrameAt = now
    if (this.fps < 50) {
      this.warnings.unshift(`frame rate at ${this.fps}`)
    }

    // possibly needed later:
    // this.controls.update()

    // push a message down the before render stream
    // push current dimensions down the stream.
    //this.animation.beforeRenderSource.next(this.dimensions)

    // repeat
    requestAnimationFrame(this.animate)

    // render
    this.renderer.render(this.scene, this.camera)
  }

}


class Keyboard {

  midi: MIDIService
  keyboardObject = new THREE.Object3D()

  notes = []
  noteNames = ['A', 'Bb', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']

  constructor(
    public scene: THREE.Scene,
    public name: string,
    public keys: number = 88,
  ) { }

  /** get access to services */
  setup(midi: MIDIService) {
    this.midi = midi
    this.makeNotes()
    this.placeNotes()
  }


  makeNotes() {
    for (let i = 0; i < 88; i++) {

      // the low A on an 88 keys keyboard is midi key 21
      let midiOffset = 21
      let midiKey = i + midiOffset
      let name = this.noteNames[i % 12]
      let color = name.length > 1 ? 'black' : 'white'
      let octave = Math.floor((i + 9) / 12)
      let position = i

      let note = new Note(this.midi, name, color, midiKey, octave, position)
      note.highlightContent()

      this.notes.push(note)
    }
  }

  placeNotes() {
    let whitesPlaced = 0
    for (let note of this.notes) {
      note.baseMesh.position.x = whitesPlaced

      if (note.color === 'white') {
        whitesPlaced += 1
      }
      if (note.color === 'black') {
        note.baseMesh.position.y = 0.5
        note.baseMesh.position.z = -1
        note.baseMesh.position.x = (whitesPlaced * 1) - 0.5
      }
      this.keyboardObject.add(note.baseMesh)

    }




    // position keyboard
    let box = new THREE.Box3().setFromObject(this.keyboardObject)
    console.log('box', box)


    let width = box.max.x + (box.min.x * -1)
    let x = width / -2

    // back
    let backBox = new THREE.BoxGeometry(width, 2, 2)
    let backMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 })
    let back = new THREE.Mesh(backBox, backMaterial)
    back.position.x = (width / 2) - 0.5
    back.position.z = -3
    this.keyboardObject.add(back)

    // bottom
    let bottomBox = new THREE.BoxGeometry(width, 1, 5)
    let bottomMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 })
    let bottom = new THREE.Mesh(bottomBox, bottomMaterial)
    bottom.position.x = (width / 2) - 0.5
    bottom.position.y = -0.75
    bottom.position.z = 0
    this.keyboardObject.add(bottom)

    // right
    let rightWidth = 2
    let rightBox = new THREE.BoxGeometry(rightWidth, 2.25, 6.5)
    let rightMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 })
    let right = new THREE.Mesh(rightBox, rightMaterial)
    right.position.x = width + 0.5
    right.position.y = -0.125
    right.position.z = -0.75
    this.keyboardObject.add(right)

    // right
    let leftWidth = 2
    let leftBox = new THREE.BoxGeometry(leftWidth, 2.25, 6.5)
    let leftMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 })
    let left = new THREE.Mesh(leftBox, leftMaterial)
    left.position.x = -1.5
    left.position.y = -0.125
    left.position.z = -0.75
    this.keyboardObject.add(left)


    this.keyboardObject.position.x = x
    this.scene.add(this.keyboardObject)
  }
}

class Note {

  baseMesh: THREE.Mesh

  iAmSelf = false
  iAmOctave = false
  iAmThird = false
  iAmFifth = false
  isMyThird = false
  isMyFifth = false
  // todo: is my low third (I am the minor fall)

  constructor(
    public midi: MIDIService,
    public name: string,
    public color: string,
    public midiKey: number,
    public octave: number,
    public position: number,
    public colorHSL?: any,
  ) {
    this.makeBase()
  }

  makeBase() {
    if (this.color === 'white') {
      let whiteBox = new THREE.BoxGeometry(0.98, 0.98, 4)
      let whiteKeyMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff })
      let whiteMesh = new THREE.Mesh(whiteBox, whiteKeyMaterial)
      this.baseMesh = whiteMesh
    } else {
      let blackBox = new THREE.BoxGeometry(0.4, 1, 2)
      let blackKeyMaterial = new THREE.MeshPhongMaterial({ color: 0x203010 })
      let blackMesh = new THREE.Mesh(blackBox, blackKeyMaterial)
      this.baseMesh = blackMesh
    }
  }

  highlightContent() {
    this.midi.stream.filter(msg => msg.name === 'keydown').subscribe(msg => {

      let msgMod = msg.key % 12
      let myMod = this.midiKey % 12

      /** Hightlight notes that are contained in the played note */

      if (msg.key === this.midiKey) {
        this.iAmSelf = true

        if (this.color === 'white') {
          this.baseMesh.rotateX(0.1)
          let bx = new THREE.Box3().setFromObject(this.baseMesh)
          this.baseMesh.position.y = -0.2 // bx.max.y * -0.5
        } else {
          this.baseMesh.rotateX(0.1)
          this.baseMesh.position.y = this.baseMesh.position.y - 0.2
        }

      }

      // octave from played, or self
      if (myMod === msgMod) {
        this.iAmOctave = true
      }

      // third of played
      if ((myMod > msgMod && msgMod === myMod - 4) || (myMod < msgMod && msgMod === myMod + 8)) {
        this.iAmThird = true
      }

      // fifth of played
      if ((myMod > msgMod && msgMod === myMod - 7) || (myMod < msgMod && msgMod === myMod + 5)) {
        this.iAmFifth = true
      }

      /** Highlight notes that as chords contain the played note */

      // MY third
      if ((myMod < msgMod && msgMod - 4 === myMod) || (myMod > msgMod && msgMod + 8 === myMod)) {
        this.isMyThird = true
      }

      // MY fifth
      if ((myMod < msgMod && msgMod - 7 === myMod) || (myMod > msgMod && msgMod + 5 === myMod)) {
        this.isMyFifth = true
      }
    })

    /** UP: unhighlight! */

    this.midi.stream.filter(msg => msg.name === 'keyup').subscribe(msg => {
      let msgMod = msg.key % 12
      let myMod = this.midiKey % 12

      /** Hightlight notes that are contained in the played note */
      if (msg.key === this.midiKey) {
        this.iAmSelf = false
        if (this.color === 'white') {

          if (this.baseMesh.rotation.x !== 0) {
            this.baseMesh.rotateX(-0.1)
            this.baseMesh.position.y = 0
          }

        } else {
          this.baseMesh.rotateX(-0.1)
          this.baseMesh.position.y = 0.5
        }

      }

      // octave from played, or self
      if (myMod === msgMod) {
        this.iAmOctave = false
      }

      // third of played
      if ((myMod > msgMod && msgMod === myMod - 4) || (myMod < msgMod && msgMod === myMod + 8)) {
        this.iAmThird = false
      }

      // fifth of played
      if ((myMod > msgMod && msgMod === myMod - 7) || (myMod < msgMod && msgMod === myMod + 5)) {
        this.iAmFifth = false
      }

      /** Highlight notes that as chords contain the played note */

      // MY third
      if ((myMod < msgMod && msgMod - 4 === myMod) || (myMod > msgMod && msgMod + 8 === myMod)) {
        this.isMyThird = false
      }

      // MY fifth
      if ((myMod < msgMod && msgMod - 7 === myMod) || (myMod > msgMod && msgMod + 5 === myMod)) {
        this.isMyFifth = false
      }
    })
  }
} /** end of Note */
