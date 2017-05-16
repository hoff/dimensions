import { Component, OnInit, AfterViewInit, ViewChild, AfterViewChecked, ElementRef, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

// THREE
import * as THREE from 'three'
import OrbitControls from 'orbit-controls-es6'

// Services
import { MIDIService } from '../midi.service'

// Light interfaces
interface Light {
  name: string,
  color: number,
  intensity: number
}
interface Directional extends Light {
  position: { x: number, y: number, z: number }
}
interface Ambient extends Light {
}
interface Spot {
  name: string
  intensity: number
  color: number
}

/**
 * parameters used for creating a box
 */
interface BoxParams {
  width?: number,
  height?: number,
  depth?: number,
  x?: number,
  y?: number,
  z?: number,
  visible?: boolean,
  colorHSL?: {h: number, s: number, l: number},
  add?: boolean,
}

@Component({
  selector: 'app-spiral',
  templateUrl: './spiral.component.html',
  styleUrls: ['./spiral.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpiralComponent implements AfterViewInit, AfterViewChecked {

  @ViewChild('sceneContainer') sceneContainer: ElementRef
  @ViewChild('sidebar') sidebar: ElementRef

  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  controls: OrbitControls

  testbox: THREE.Mesh

  // petal container
  petals: Petal[] = []

  subject: Subject<any>

  window = window
  sidebarWidth = 300

  // LIGHT DIMENSIONS
  lights: {
    directionals: Directional[],
    ambients: Ambient[],
    spots: Spot[],
  } = {
    directionals: [
      {
        name: 'sun',
        position: { x: 3, y: 10, z: 10 },
        color: 0xffffff,
        intensity: 0.7,
      },
      {
        name: 'moon',
        position: { x: -3, y: 10, z: -10 },
        color: 0xffffff,
        intensity: 0.3,
      },
    ],
    ambients: [
      {
        name: 'daylight',
        color: 0xffffff,
        intensity: 0.3,
      }
    ],
    spots: [
      {
        name: 'bulb',
        color: 0xffffff,
        intensity: 0,
      }
    ]
  }

  dimensions = {
    running: true,
    time: 10000,
    lights: this.lights,
    zTest: 3,
    renderer: {
      opacity: 1
    }
  }

  heroBoxes = []
  ySpeed = 0.5


  sidebarVisible = true

  constructor(
    public midi: MIDIService,
  ) {

    /**
     * Subscribe to keyboard events
     */
    Observable.fromEvent(window, 'keypress').subscribe((event: KeyboardEvent) => {
      console.log(event.which)

      // CMD B: toggle sidebar
      if (event.which === 98 && event.metaKey) {
        this.toggleSidebar()
      }
      // CMD F: request fullscreen
      if (event.which === 102) {
        this.requestFullscreen()
      }
    })

    /**
     * create observable dimensions subject
     */
    this.subject = new Subject()
  }

  /**
   * Setup Scene and add resize listener
   */
  ngAfterViewInit() {
    this.sceneSetup(this.dimensions)
    window.addEventListener('resize', this.onWindowResize, false);
  }

  ngAfterViewChecked() {
    // console.log('view checked')
  }

  onWindowResize = () => {
    this.resizeScene()
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible
    this.resizeScene()
  }

  /**
   * resize canvas and update camera according to available space
   */
  resizeScene() {
    let availableWidth = this.window.innerWidth - (this.sidebarVisible ? this.sidebarWidth : 0)
    let availableHeight = this.window.innerHeight
    this.camera.aspect = availableWidth / availableHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(availableWidth, availableHeight)
  }

  requestFullscreen() {
    let doc = document.getElementById('screen')
    doc.webkitRequestFullScreen()
  }


  sceneSetup(dimensions) {

    // scene
    this.scene = new THREE.Scene()

    // renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    this.renderer.setClearColor(0x111111, dimensions.renderer.opacity)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.setSize(this.sceneContainer.nativeElement.scrollWidth, this.sceneContainer.nativeElement.scrollHeight)
    this.sceneContainer.nativeElement.appendChild(this.renderer.domElement)

    // camera
    this.camera = new THREE.PerspectiveCamera(40, this.sceneContainer.nativeElement.scrollWidth / this.sceneContainer.nativeElement.scrollHeight, 1, 10000)
    this.camera.position.z = 5
    this.camera.fov = 10
    this.camera.position.set(0, 17, 26)

    // controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enabled = true
    this.controls.autoRotate = true
    this.controls.maxDistance = 15000
    this.controls.minDistance = 0
    this.controls.autoRotateSpeed = 0
    this.controls.autoRotate = true

    // lights
    for (let light of this.dimensions.lights.directionals) {
      let directional = new THREE.DirectionalLight(light.color, light.intensity)
      directional.position.set(light.position.x, light.position.y, light.position.z)
      this.scene.add(directional)
    }
    for (let light of this.dimensions.lights.ambients) {
      let ambient = new THREE.AmbientLight(light.color, light.intensity)
      this.scene.add(ambient)
    }
    for (let light of this.dimensions.lights.spots) {
      let spot = new THREE.SpotLight(light.color, light.intensity)
      this.scene.add(spot)
    }

    // test
    let mat = new THREE.MeshPhongMaterial({ color: 0xff0000, transparent: true })
    mat.opacity = 0.2
    let geo = new THREE.BoxGeometry(1, 1, 1)
    this.testbox = new THREE.Mesh(geo, mat)
    this.testbox.visible = true
    this.scene.add(this.testbox)

    // performance test
    for (let i = 0; i < 1000; i++) {
      let mat = new THREE.MeshPhongMaterial({ color: 0xff0000 })
      let geo = new THREE.BoxGeometry(1, 1, 1)
      let mesh = new THREE.Mesh(geo, mat)
      mesh.position.x = i * 1.1
      mesh.visible = false
      // this.scene.add(mesh)
    }


    this.seed(88)
    //this.doBudget()
    // this.hero()

    this.animate()

    this.midi.stream.subscribe(msg => {
      console.log(msg)
      let boxParams: BoxParams = {
        width: 2,
        x: msg.key - 70,
      }
      this.makeBox(boxParams)
    })
    
  }



  /**
   * create a number of petal seeds, with increasing 'appear at' times
   * 
   * @param count 
   */
  seed(count) {
    for (let p = 0; p < count; p++) {

      let midiKey = p + 21

      let appearAfter = p * 100
      let angle = 31
      // angle = 137.5
      // angle = 270
      let petal = new Petal(this.midi, midiKey, this.subject, appearAfter, this.scene, p * angle + 0.1)
      this.petals.push(petal)
    }
  }
  
  /**
   * Creates a box for, the way you like it...
   * and adds it to the scene by default :)
   */
  makeBox(params: BoxParams) {

    /** Read Params */

    // size
    const width  = params.width  || 1
    const height = params.height || 1
    const depth  = params.depth  || 1

    // position
    const x = params.x || 0
    const y = params.y || 0
    const z = params.z || 0

    // color {hsl}
    const hsl = params.colorHSL || {h: 0, s: 0, l: 1}

    // add
    const add = params.add || true

    /** Create Box */

    // material
    const boxMaterial = new THREE.MeshPhongMaterial()
    boxMaterial.color.setHSL(hsl.h, hsl.s, hsl.l)

    // geometry
    const boxGeometry = new THREE.BoxGeometry(width, width, width)

    // mesh
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)
    boxMesh.position.set(x, y, z)

    // add 
    if (add) {
      this.scene.add(boxMesh)
    }

    return boxMesh
  }

  makeBoxAt(x: number, y: number, z: number, color?) {
    
    let mat = new THREE.MeshPhongMaterial({ })

    if (color) {
      mat.color.setHSL(color[0], color[1], color[2])
    }

    let geo = new THREE.BoxGeometry(1, 10, 1)
    let mesh = new THREE.Mesh(geo, mat)
    mesh.position.set(x, y, z)
    this.scene.add(mesh)
    return mesh
  }

  doBudget() {
    let offset = 0
    let totalBudget = 0
    let table = new THREE.Object3D()
    for (let team of tables) {
      totalBudget += team.budget
      let texture = THREE.ImageUtils.loadTexture('/assets/teams/' + team.icon)

      let mat = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture })
      let geo = new THREE.BoxGeometry(1, 1, 1)
      let mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(team.rank * 2.5, team.points / 2, 0)
      let scale = nthRoot((team.budget / 20), 3)
      mesh.scale.set(scale, scale, scale)
      table.add(mesh)
      // this.scene.add(mesh)
      offset += scale + 1
    }
    let bbox = new THREE.Box3().setFromObject(table)
    console.log(bbox)
    let width = bbox.max.x - bbox.min.x
    let height = bbox.max.y
    table.position.setX(width / -2)
    table.position.setY(height / -2)
    this.scene.add(table)
  }

  /** piano hero test */
  hero() {
    let delta = 0
    let midiData = this.midi.parsedMidi
    if (!midiData) {
      return
    }
    for (let event of midiData.track[0].event) {
      delta += event.deltaTime / 10
      if (event.type === 9) {
        let decimal = (event.data[0] % 12) / 12
        let hsl = [decimal, 1, 0.5]

        /**
         * the kings way of making a box!
         */
        let boxParams: BoxParams = {
          width: 1, 
          height: 1,
          depth: 1,
          x: event.data[0] * 10 / 3, // the midi key determines how far right
          y: delta,                  // hight is time delay
          colorHSL: {h: decimal, s: 1, l: 0.5}
        }
        let box = this.makeBox(boxParams)

        box.userData.key = event.data[0]
        box.userData.velocity = event.data[1]
        box.userData.played = false
        if (event.data[1] === 0)  {
          box.visible = false
        }
        this.heroBoxes.push(box)
      }
    }
  }

  runHero = () => {
    for (let box of this.heroBoxes) {
      box.position.y -= this.ySpeed
      if (box.position.y < 0 && box.userData.played === false) {
        console.log('run hero has midi?', this.midi)
        if (!this.midi.soundNote) {
          console.warn('our midi service does not have soundNote method, strange')
        } else {
          this.midi.soundNote(0, box.userData.key, box.userData.velocity)

        }
        box.visible = false
        box.userData.played = true
      }
    }
  }

  animate = () => {

    // run hero test
    this.runHero()

    // forward time if running
    this.dimensions.time += this.dimensions.running ? 15 : 0

    // publish dimensions
    this.subject.next(this.dimensions)

    // render
    this.renderer.render(this.scene, this.camera)

    // repeat
    requestAnimationFrame(this.animate)
  }

}
// end of spiral component


/**
 * Petal
 * 
 * 
 */

export class Petal {

  planes: THREE.Object3D
  originPlaneMesh: THREE.Mesh
  outerPlaneMesh: THREE.Mesh

  anglePercent: number

  constructor(public midi: MIDIService, public midiKey: number, public subject, public appearAfter: number, public scene: THREE.Scene, public angle: number) {

    let baseAngle = this.angle % 360
    this.anglePercent = baseAngle / 360

    // subscribe to dimensions (time is important here)
    this.subject.subscribe(dimensions => {

      this.updateVertices(dimensions)

    })

    // subscribe to MIDI!

    this.midi.stream.filter(msg => msg.key === this.midiKey && msg.name === 'keyup').subscribe(msg => {
      this.outerPlaneMesh.visible = false
    })
    this.midi.stream.filter(msg => msg.key === this.midiKey && msg.name === 'keydown').subscribe(msg => {
      this.outerPlaneMesh.visible = true
      console.log(msg.key)
      // test, working
      // this.midi.soundNote(0, 50, 1)
    })

  }

  computeVertices(dimensions) {

    let age = dimensions.time - this.appearAfter
    if (age < 0) {
      return false
    }

    // TODO make typed dimensions
    let height = 100 / age
    let distance = age / 100 // distance increases by 1 every second

    // origin
    let xOrigin, yOrigin, zOrigin = 0

    // the outer most edge
    let x = cosine(this.angle) * distance
    let y = sine(this.angle) * distance
    let z = height

    // leftie
    let xLeft = cosine(this.angle + 30) * (distance / 2)
    let yLeft = sine(this.angle + 30) * (distance / 2)
    let zLeft = height / 2

    // rightie
    let xRight = cosine(this.angle - 30) * (distance / 2)
    let yRight = sine(this.angle - 30) * (distance / 2)
    let zRight = height / 2

    return [
      new THREE.Vector3(xOrigin, yOrigin, zOrigin),
      new THREE.Vector3(xLeft, yLeft, zLeft),
      new THREE.Vector3(xRight, yRight, zRight),
      new THREE.Vector3(x, y, z),
    ]
  }




  updateVertices(dimensions) {

    // if we have not appeared yet, stop here
    let age = dimensions.time - this.appearAfter
    if (age < 0) {
      return
    }

    let vertices = this.computeVertices(dimensions)

    if (dimensions.running) {
      this.scene.remove(this.originPlaneMesh)
      this.scene.remove(this.outerPlaneMesh)


      let originPlaneMat = new THREE.MeshPhongMaterial({ color: 0xff0000, side: THREE.DoubleSide })
      originPlaneMat.color.setHSL(this.anglePercent, 0.8, 0.3)

      // compute vertices

      // make plane (origin to center)
      let originPlaneGeo = new THREE.Geometry()
      originPlaneGeo.vertices.push(vertices[0])
      originPlaneGeo.vertices.push(vertices[1])
      originPlaneGeo.vertices.push(vertices[2])

      originPlaneGeo.faces.push(new THREE.Face3(0, 1, 2))
      originPlaneGeo.computeFaceNormals()

      let originPlaneMesh = new THREE.Mesh(originPlaneGeo, originPlaneMat)
      originPlaneMesh.visible = false
      this.originPlaneMesh = originPlaneMesh
      this.scene.add(originPlaneMesh)

      // outer
      // create center-to-outer plane
      let outerPlaneMat = new THREE.MeshPhongMaterial({ color: 0x0000ff, side: THREE.DoubleSide })
      outerPlaneMat.color.setHSL(this.anglePercent, 0.8, 0.5)

      let outerPlaneGeo = new THREE.Geometry()
      outerPlaneGeo.vertices.push(vertices[1])
      outerPlaneGeo.vertices.push(vertices[2])
      outerPlaneGeo.vertices.push(vertices[3])

      outerPlaneGeo.faces.push(new THREE.Face3(0, 1, 2))
      outerPlaneGeo.computeFaceNormals()

      let outerPlaneMesh = new THREE.Mesh(outerPlaneGeo, outerPlaneMat)
      outerPlaneMesh.visible = false
      this.outerPlaneMesh = outerPlaneMesh
      this.scene.add(outerPlaneMesh)

    }
  }

} // END OF PETAL CLASS


// HELPER FUNCTIONS
export function randomColor() {
  return Math.floor(Math.random() * 16777215)
}

export function sine(degrees: number) {
  return Math.sin(toRadians(degrees))
}

export function cosine(degrees: number) {
  return Math.cos(toRadians(degrees))
}

export function tan(degrees: number) {
  return Math.tan(toRadians(degrees))
}

/**
 * degrees -> radians
 */
export function toRadians(degrees: number) {
  return degrees * Math.PI / 180
}

/**
 * radians -> degrees
 */
export function toDegrees(radians: number) {
  return 180 * radians / Math.PI
}

/**
 * nth root
 */
export function nthRoot(val: number, root: number) {
  return Math.pow(val, 1 / root)
}

export const budgets = [
  { team: 'FC Bayern München', budget: 566.15, icon: 'bayern.gif' },
  { team: 'Borussia Dortmund', budget: 376.35, icon: 'dortmund.gif' },
  { team: 'Bayer 04 Leverkusen', budget: 273.95, icon: 'leverkusen.gif' },
  { team: 'FC Schalke 04', budget: 216.63, icon: 'schalke.gif' },
  { team: 'Borussia Mönchengladbach', budget: 163.55, icon: 'gladbach.gif' },
  { team: 'VfL Wolfsburg', budget: 154.00, icon: 'wolfsburg.gif' },
  { team: 'RasenBallsport Leipzig', budget: 123.93, icon: 'leipzig.gif' },
  { team: 'TSG 1899 Hoffenheim', budget: 101.63, icon: 'hoffenheim.gif' },
  { team: '1.FC Köln', budget: 99.30, icon: 'koeln.gif' },
  { team: 'Hertha BSC', budget: 86.30, icon: 'hertha.gif' },
  { team: '1.FSV Mainz 05', budget: 79.73, icon: 'mainz.gif' },
  { team: 'Hamburger SV', budget: 75.75, icon: 'hamburg.gif' },
  { team: 'SV Werder Bremen', budget: 69.80, icon: 'bremen.gif' },
  { team: 'Eintracht Frankfurt', budget: 68.55, icon: 'frankfurt.gif' },
  { team: 'FC Augsburg', budget: 62.73, icon: 'augsburg.gif' },
  { team: 'SC Freiburg', budget: 58.68, icon: 'freiburg.gif' },
  { team: 'FC Ingolstadt 04', budget: 34.55, icon: 'ingolstadt.gif' },
  { team: 'SV Darmstadt 98', budget: 21.50, icon: 'darmstadt.gif' },
]

const tables = [
  { rank: 1, team: 'Bayern', matches: 32, wins: 23, losses: 7, draws: 2, goals: 80, received: 17, diff: 63, points: 76, budget: 566.15, icon: 'bayern.gif' },
  { rank: 2, team: 'Leipzig', matches: 32, wins: 20, losses: 6, draws: 6, goals: 60, received: 32, diff: 28, points: 66, budget: 123.93, icon: 'leipzig.gif' },
  { rank: 3, team: 'Dortmund', matches: 32, wins: 17, losses: 9, draws: 6, goals: 67, received: 36, diff: 31, points: 60, budget: 376.35, icon: 'dortmund.gif' },
  { rank: 4, team: 'Hoffenheim', matches: 32, wins: 15, losses: 13, draws: 4, goals: 59, received: 34, diff: 25, points: 58, budget: 101.63, icon: 'hoffenheim.gif' },
  { rank: 5, team: 'Freiburg', matches: 32, wins: 14, losses: 5, draws: 13, goals: 40, received: 55, diff: -15, points: 47, budget: 58.68, icon: 'freiburg.gif' },
  { rank: 6, team: 'Hertha BSC', matches: 32, wins: 14, losses: 4, draws: 14, goals: 39, received: 41, diff: -2, points: 46, budget: 86.30, icon: 'hertha.gif' },
  { rank: 7, team: 'FC Köln', matches: 32, wins: 11, losses: 12, draws: 9, goals: 47, received: 40, diff: 7, points: 45, budget: 99.30, icon: 'koeln.gif' },
  { rank: 8, team: 'Bremen', matches: 32, wins: 13, losses: 6, draws: 13, goals: 55, received: 55, diff: 0, points: 45, budget: 69.80, icon: 'bremen.gif' },
  { rank: 9, team: 'Gladbach', matches: 32, wins: 12, losses: 7, draws: 13, goals: 42, received: 46, diff: -4, points: 43, budget: 163.55, icon: 'gladbach.gif' },
  { rank: 10, team: 'Schalke', matches: 32, wins: 11, losses: 8, draws: 13, goals: 43, received: 38, diff: 5, points: 41, budget: 216.63, icon: 'schalke.gif' },
  { rank: 11, team: 'Frankfurt', matches: 32, wins: 11, losses: 8, draws: 13, goals: 32, received: 37, diff: -5, points: 41, budget: 68.55, icon: 'frankfurt.gif' },
  { rank: 12, team: 'Leverkusen', matches: 32, wins: 10, losses: 7, draws: 15, goals: 45, received: 51, diff: -6, points: 37, budget: 273.95, icon: 'leverkusen.gif' },
  { rank: 13, team: 'Augsburg', matches: 32, wins: 9, losses: 9, draws: 14, goals: 34, received: 50, diff: -16, points: 36, budget: 62.73, icon: 'augsburg.gif' },
  { rank: 14, team: 'Wolfsburg', matches: 32, wins: 10, losses: 6, draws: 16, goals: 32, received: 49, diff: -17, points: 36, budget: 154.00, icon: 'wolfsburg.gif' },
  { rank: 15, team: 'Mainz', matches: 32, wins: 9, losses: 7, draws: 16, goals: 40, received: 51, diff: -11, points: 34, budget: 79.73, icon: 'mainz.gif' },
  { rank: 16, team: 'Hamburg', matches: 32, wins: 9, losses: 7, draws: 16, goals: 30, received: 59, diff: -29, points: 34, budget: 75.75, icon: 'hamburg.gif' },
  { rank: 17, team: 'Ingolstadt', matches: 32, wins: 8, losses: 6, draws: 18, goals: 34, received: 55, diff: -21, points: 30, budget: 34.55, icon: 'ingolstadt.gif' },
  { rank: 18, team: 'Darmstadt', matches: 32, wins: 7, losses: 3, draws: 22, goals: 26, received: 59, diff: -33, points: 24, budget: 21.50, icon: 'darmstadt.gif' },
]

