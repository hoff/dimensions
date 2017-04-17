import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core'
import { DomSanitizer, SafeStyle, SafeResourceUrl, SafeUrl } from '@angular/platform-browser'

import * as THREE from 'three'
import OrbitControls from 'orbit-controls-es6'

import { MIDIService } from '../midi.service'
import { AnimationService } from '../animation.service'

import { Show } from '../show'

/**
 * 
 * This component is for playing with hot-loading. That is, highlighting predictions.
 * 
 * First try: lay out 2 keyboards.
 * 
 * One is for the prediction that the base note is also the base of the chord in question
 * 
 * The other is for predicting that the played note is the third of another chord
 * 
 * Todo: when a note is played.
 * 
 * one keyboard shows the notes other notes, up. do that first. classes?
 * 
 * keyboard
 * note    <- this keyboard's note listen for any midi down, an highlight themselves is the are 4 or 7 higher
 * 
 */
@Component({
  selector: 'app-flat-page',
  templateUrl: './flat-page.component.html',
  styleUrls: ['./flat-page.component.css']
})
export class FlatPageComponent implements OnInit {

  @ViewChild('sceneContainer') sceneContainer: ElementRef

  width = 1440
  height = 600

  scene: THREE.Scene
  camera: THREE.PerspectiveCamera | THREE.OrthographicCamera
  renderer: THREE.WebGLRenderer

  // controls (orbit)
  controls: any

  // lights
  lights: any = {}

  directional: THREE.DirectionalLight
  ambient: THREE.AmbientLight
  spot: THREE.SpotLight


  baseKeyboard: Keyboard

  noteNames = ['A', 'Bb', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']


  HSLAs = {
    'A': { h: 0.08, s: 0.71, l: 0.75, a: 1 },
    'Bb': { h: 0.0833333, s: 0.5, l: 0.833333, a: 1 },
    'B': { h: 0.15, s: 0.5, l: 0.916666, a: 1 },
    'C': { h: 0.18, s: 0.1, l: 0.95, a: 1 }, // fix to white
    'C#': { h: 0.19, s: 0.5, l: 0.9166, a: 1 },
    'D': { h: 0.18, s: 0.71, l: 0.8333, a: 1 },
    'D#': { h: 0.583333333, s: 0.5, l: 0.75, a: 1 },
    'E': { h: 0.53, s: 0.57, l: 0.65, a: 1 },
    'F': { h: 0.64, s: 0.5, l: 0.5833, a: 1 },
    'F#': { h: 0.38, s: 0.5, l: 0.71, a: 1 },
    'G': { h: -1, s: 0.59, l: 0.58333, a: 1 }, // fix to black
    'G#': { h: -0.9, s: 0.5, l: 0.666, a: 1 },
  }

  hslaString(noteName) {
    let hsla = this.HSLAs[noteName]
    let h = hsla.h * 360
    let s = Math.round(hsla.s * 100) + '%'
    let l = Math.round(hsla.l * 100) + '%'
    let a = Math.round(hsla.a * 100)
    return `hsla(${h}, ${s}, ${l}, ${a})`
  }

  colors() {
    let list = []
    let startHue = 60
    for (let i = 0; i < 12; i++) {
      let hue = startHue + (i * 30)
      let sat = '50%'
      let light = '50%'
      let a = 1
      list.push(`hsla(${hue}, ${sat}, ${light}, ${a})`)
    }
    return list
  }

  chords() {
    let list = []
    let i = 0

    for (let note of this.noteNames) {
      let thirdI = i + 4
      if (thirdI > 11) {
        thirdI = thirdI - 12
      }
      let fifthI = i + 7
      if (fifthI > 11) {
        fifthI = fifthI - 12
      }
      let chord = {
        name: note,
        self: note,
        third: this.noteNames[thirdI],
        fifth: this.noteNames[fifthI],
      }
      list.push(chord)
      i++
    }
    return list
  }


  constructor(
    public midi: MIDIService,
    public animation: AnimationService,
    public ref: ChangeDetectorRef,
    public sanitizer: DomSanitizer,
  ) {
    this.baseKeyboard = new Keyboard('base')
    this.baseKeyboard.setup(this.midi, this.sanitizer)
  }

  log($event) {
    console.log($event)
  }


  ngOnInit() {
    /** midi events run ouside angular, so force change detection (for DOM) */

    this.midi.stream.subscribe(msg => {
      this.ref.detectChanges()
    })


    /** make a scene! */
    this.scene = new THREE.Scene()

    this.renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true })
    this.renderer.setClearColor(0xff0000, 1)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.setSize(this.sceneContainer.nativeElement.scrollWidth, this.sceneContainer.nativeElement.scrollHeight)
    this.renderer.shadowMap.enabled = true;

    this.sceneContainer.nativeElement.appendChild(this.renderer.domElement)

    this.camera = new THREE.PerspectiveCamera(75, this.sceneContainer.nativeElement.scrollWidth / this.sceneContainer.nativeElement.scrollHeight, 1, 10000)
    //this.camera = new OrthographicCamera(100, 100, 100, 100)
    this.camera.position.z = 5
    this.camera.fov = 60


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

    let box = new THREE.BoxGeometry(1, 1, 1, )
    let material = new THREE.MeshBasicMaterial({ color: 0xff00ff })
    let mesh = new THREE.Mesh(box, material)
    this.scene.add(mesh)

    // kick it off!



    // dummy creation of meshes

    let keyboardGroup = new THREE.Group()
    let keyboardObject = new THREE.Object3D()

    let whitesPlaced = 0
    for (let note of this.baseKeyboard.notes) {

      let hsla = this.HSLAs[note.name]

      // if white
      if (note.name.length === 1) {

        let whiteBox = new THREE.BoxGeometry(0.9, 0.9, 4)
        let whiteKeyMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff })

        whiteKeyMaterial.color.setHSL(hsla.h, hsla.s, hsla.l)
        let whiteMesh = new THREE.Mesh(whiteBox, whiteKeyMaterial)

        whiteMesh.position.x = whitesPlaced * 1
        keyboardObject.add(whiteMesh)
        whitesPlaced += 1
      } else {

        let blackBox = new THREE.BoxGeometry(0.4, 0.5, 2, )
        let blackKeyMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff })
        blackKeyMaterial.color.setHSL(hsla.h, hsla.s, hsla.l)
        // blackKeyMaterial.color.setHSL(0, 0, 0)

        let blackMesh = new THREE.Mesh(blackBox, blackKeyMaterial)

        blackMesh.position.x = (whitesPlaced * 1) - 0.5
        blackMesh.position.z = -1
        blackMesh.position.y = 0.8
        keyboardObject.add(blackMesh)
      }
    }

    let bx = new THREE.Box3().setFromObject(keyboardObject)
    let x = bx.max.x / -2
    keyboardObject.position.x = x
    this.scene.add(keyboardObject)



    /** Particles test */
    // create the particle variables
    let particleCount = 1000,
      particles = new THREE.Geometry(),
      pMaterial = new THREE.ParticleBasicMaterial({
        color: 0xFFFFFF,
        size: 1
      });

    // now create the individual particles
    for (let p = 0; p < particleCount; p++) {

      // create a particle with random
      // position values, -250 -> 250
      let pX = p // Math.sin(p) // Math.random() * 500 - 250
      let pY = Math.sin(p) + 3 //= Math.random() * 500 - 250
      let pZ = 0 // Math.random() * 500 - 250
      let  particle = new THREE.Vector3(pX, pY, pZ)
      // add it to the geometry
      particles.vertices.push(particle);
    }

    // create the particle system
    let particleSystem = new THREE.ParticleSystem(
      particles,
      pMaterial);

    // add it to the scene
    this.scene.add(particleSystem)

    this.animate()
  }

  fakeKeypress($event, note: Note) {
    console.log($event, note)
    this.midi.source.next({ key: note.midiKey, control: 'tastatur', 'name': 'keydown', keyName: note.name })
  }

  animate = () => {
    // required?
    this.controls.update()

    // push a message down the before render stream
    // push current dimensions down the stream.
    //this.animation.beforeRenderSource.next(this.dimensions)

    // repeat
    requestAnimationFrame(this.animate)

    // render
    this.renderer.render(this.scene, this.camera)
  }

  randomColor() {
    return Math.floor(Math.random() * 16777215)
  }


}

class Keyboard {

  midi: MIDIService
  sanitizer: DomSanitizer

  notes = []
  noteNames = ['A', 'Bb', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']

  constructor(
    public name: string,
    public keys: number = 88,
  ) { }

  /** get access to services */
  setup(midi: MIDIService, sanitizer: DomSanitizer) {
    this.midi = midi
    this.sanitizer = sanitizer
    this.makeNotes()
  }

  makeNotes() {
    for (let i = 0; i < 88; i++) {

      // the low A on an 88 keys keyboard is midi key 21
      let midiOffset = 21
      let midiKey = i + midiOffset
      let name = this.noteNames[i % 12]
      let octave = Math.floor((i + 9) / 12)
      let position = i

      let note = new Note(this.midi, this.sanitizer, name, midiKey, octave, position)
      note.highlightContent()

      this.notes.push(note)
    }
  }
}

class Note {

  iAmSelf = false
  iAmSelfColor = 'orange'
  iAmThirdColor = 'lime'
  iAmThird = false
  iAmFifth = false
  iAmFifthColor = 'red'
  isMyThird = false
  isMyFifth = false



  constructor(
    public midi: MIDIService,
    public sanitizer: DomSanitizer,
    public name: string,
    public midiKey: number,
    public octave: number,
    public position: number,
    public colorHSL?: any,
  ) {

  }

  highlightContent() {
    this.midi.stream.filter(msg => msg.name === 'keydown').subscribe(msg => {

      let msgMod = msg.key % 12
      let myMod = this.midiKey % 12

      /** Hightlight notes that are contained in the played note */

      // octave from played, or self
      if (myMod === msgMod) {
        this.iAmSelf = true
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

      // octave from played, or self
      if (myMod === msgMod) {
        this.iAmSelf = false
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



}

