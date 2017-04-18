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

  dimensions = {
    gravity: 0.8,
    kick: 1.5,
    box: {
      width: 1,
      height: 2,
      depth: 2,
      rotationX: 0.05,
      rotationY: 0.01,
      rotationZ: 0.01,
      fadeSpeed: 0.03,
    },
    lights: {
      directional: {
        intensity: 1,
      }
    }
  }

  constructor(
    public midi: MIDIService,
    public animation: AnimationService,
  ) { }

  requestFullscreen() {
    let doc = document.getElementById('sceneContainer')
    doc.webkitRequestFullScreen()
  }

  ngAfterViewInit() {
    /** set up the scene */
    this.sceneSetup()
    /** make keyboard */
    this.keyboard = new Keyboard(this.scene, 'piano', 88)
    this.keyboard.setup(this.midi, this.animation)
    this.keyboard.keyboardObject.visible = false

    /** subscribe to knobs for camera */
    this.bindCamera()

    /** kick off animation loop */
    this.animate()
  }

  bindCamera() {
    this.midi.stream.filter(msg => msg.keyName === 'R1').subscribe(msg => {
      this.camera.position.x = (msg.decimal * 200) - 100
    })
    this.midi.stream.filter(msg => msg.keyName === 'R2').subscribe(msg => {
      this.camera.position.y = (msg.decimal * 200) - 100
    })
    this.midi.stream.filter(msg => msg.keyName === 'R3').subscribe(msg => {
      this.camera.position.z = (msg.decimal * 200) - 100
    })
    // load preset
    this.midi.stream.filter(msg => msg.keyName === 'B1').subscribe(msg => {
      this.dimensions = {
        gravity: 0.0,
        kick: 1.2,
        box: {
          width: 1,
          height: 2,
          depth: 2,
          rotationX: 0.05,
          rotationY: 0.00,
          rotationZ: 0.00,
          fadeSpeed: 0.01,
        },
        lights: {
          directional: {
            intensity: 0.8,
          }
        }
      }
    })
    this.midi.stream.filter(msg => msg.keyName === 'B2').subscribe(msg => {
      this.dimensions = {
        gravity: 0.1,
        kick: 1.2,
        box: {
          width: 6.8,
          height: 4,
          depth: 2.4,
          rotationX: 0.05,
          rotationY: 0.00,
          rotationZ: 0.00,
          fadeSpeed: 0.001,
        },
        lights: {
          directional: {
            intensity: 0.8,
          }
        }
      }
    })
    this.midi.stream.filter(msg => msg.keyName === 'B3').subscribe(msg => {
      this.dimensions = {
        gravity: 0.0,
        kick: 0.2,
        box: {
          width: 5,
          height: 4,
          depth: 2.4,
          rotationX: 0.05,
          rotationY: 0.00,
          rotationZ: 0.00,
          fadeSpeed: 0.001,
        },
        lights: {
          directional: {
            intensity: 0.8,
          }
        }
      }
    })
  }

  sceneSetup() {
    /** make a scene! */
    this.scene = new THREE.Scene()

    this.renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true })
    this.renderer.setClearColor(0xffffff, 1)
    this.renderer.setClearColor(0x111111, 1)
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
    this.controls.update()

    // do your update
    this.directional.intensity = this.dimensions.lights.directional.intensity

    // push current dimensions down the stream.
    this.animation.beforeRenderSource.next(this.dimensions)

    // repeat
    requestAnimationFrame(this.animate)

    // render
    this.renderer.render(this.scene, this.camera)
  }

}


class Keyboard {

  midi: MIDIService
  animation: AnimationService
  keyboardObject = new THREE.Object3D()

  notes = []
  noteNames = ['A', 'Bb', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']

  constructor(
    public scene: THREE.Scene,
    public name: string,
    public keys: number = 88,
  ) { }

  /** get access to services */
  setup(midi: MIDIService, animation: AnimationService) {
    this.midi = midi
    this.animation = animation
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

      let note = new Note(this.midi, this.animation, this.scene, name, color, midiKey, octave, position)
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

    let frameColor = 0xffffff
    frameColor = 0x333333

    // back
    let backBox = new THREE.BoxGeometry(width, 2, 2)
    let backMaterial = new THREE.MeshPhongMaterial({ color: frameColor })
    let back = new THREE.Mesh(backBox, backMaterial)
    back.position.x = (width / 2) - 0.5
    back.position.z = -3
    this.keyboardObject.add(back)

    // bottom
    let bottomBox = new THREE.BoxGeometry(width, 1, 5)
    let bottomMaterial = new THREE.MeshPhongMaterial({ color: frameColor })
    let bottom = new THREE.Mesh(bottomBox, bottomMaterial)
    bottom.position.x = (width / 2) - 0.5
    bottom.position.y = -0.75
    bottom.position.z = 0
    //this.keyboardObject.add(bottom)

    // right
    let rightWidth = 2
    let rightBox = new THREE.BoxGeometry(rightWidth, 2.25, 6.5)
    let rightMaterial = new THREE.MeshPhongMaterial({ color: frameColor })
    let right = new THREE.Mesh(rightBox, rightMaterial)
    right.position.x = width + 0.5
    right.position.y = -0.125
    right.position.z = -0.75
    this.keyboardObject.add(right)

    // left
    let leftWidth = 2
    let leftBox = new THREE.BoxGeometry(leftWidth, 2.25, 6.5)
    let leftMaterial = new THREE.MeshPhongMaterial({ color: frameColor })
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

  kick = 1.5
  dimensions

  constructor(
    public midi: MIDIService,
    public animation: AnimationService,
    public scene: THREE.Scene,
    public name: string,
    public color: string,
    public midiKey: number,
    public octave: number,
    public position: number,
    public colorHSL?: any,
  ) {
    this.makeBase()
    this.animation.beforeRenderStream.subscribe((dimensions) => {
      this.dimensions = dimensions
    })
  }

  makeBase() {
    if (this.color === 'white') {
      let whiteBox = new THREE.BoxGeometry(0.98, 0.98, 4)
      let whiteKeyMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 })
      let whiteMesh = new THREE.Mesh(whiteBox, whiteKeyMaterial)
      this.baseMesh = whiteMesh
    } else {
      let blackBox = new THREE.BoxGeometry(0.4, 1, 2)
      let blackKeyMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 })
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

        /**
         * Firing of a vessel
         */
        let vessel = new Vessel(this.animation, this.scene, this, this.dimensions)

        // where is the note?
        this.scene.updateMatrixWorld(true);
        let position = new THREE.Vector3()
        position.setFromMatrixPosition(this.baseMesh.matrixWorld)
        vessel.vesselMesh.position.x = position.x



        vessel.vesselMesh.position.y = 2
        vessel.vesselMesh.position.z = -3
        vessel.velocity.y = ((msg.velocity / 127) * 50) * this.dimensions.kick
        vessel.velocity.z = -0.1



        this.scene.add(vessel.vesselMesh)

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

class Vessel {

  velocity = new THREE.Vector3()
  vesselMesh: THREE.Mesh
  animationSubscription

  constructor(
    public animation: AnimationService,
    public scene: THREE.Scene,
    public note: Note,
    public dimensions,
  ) {
    let vesselGeo = new THREE.BoxGeometry(
      this.dimensions.box.width,
      this.dimensions.box.height,
      this.dimensions.box.depth
    )
    let vesselMat = new THREE.MeshPhongMaterial({ color: randomColor(), transparent: true })

    let hsla = HSLAs[note.name]
    vesselMat.color.setHSL(hsla.h, hsla.s, hsla.l)
    this.vesselMesh = new THREE.Mesh(vesselGeo, vesselMat)

    this.animationSubscription = this.animation.beforeRenderStream.subscribe((dimensions) => {
      // apply gravity
      let gravityVector = new THREE.Vector3(0, (-1 / 60) * dimensions.gravity, 0)
      this.velocity.add(gravityVector)

      // rotate
      this.vesselMesh.rotation.x -= dimensions.box.rotationX
      this.vesselMesh.rotation.y += dimensions.box.rotationY
      this.vesselMesh.rotation.z += dimensions.box.rotationZ


      // fade
      this.vesselMesh.material.opacity -= this.dimensions.box.fadeSpeed

      // re-position yourself
      this.vesselMesh.position.add(this.velocity)
      if (this.vesselMesh.position.y < 0 || this.vesselMesh.material.opacity < 0) {
        // this.vesselMesh.visible = false
        this.scene.remove(this.vesselMesh)

        this.animationSubscription.unsubscribe()
      }
    })

  }



}

const randomColor = () => {
  return Math.floor(Math.random() * 16777215)
}

const HSLAs = {
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
