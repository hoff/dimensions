import { Component, ViewChild, ElementRef, OnInit } from '@angular/core'
import {
  Scene,
  Renderer,

  // camear
  PerspectiveCamera,
  OrthographicCamera,
  OrbitControls,

  // geometries
  BoxGeometry,
  SphereGeometry,

  // Light
  AmbientLight,
  DirectionalLight,

  // materials
  MeshBasicMaterial,
  //MeshBasicMaterial,

  // color
  Color,

  // universals
  Mesh,
  WebGLRenderer,
  Vector3,

} from 'three'

import { MIDIService } from './midi.service'

interface Country {
  name: string,
  gdp: number,
  population: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {



  @ViewChild('scene') sceneContainer: ElementRef



  scene: Scene
  camera: PerspectiveCamera
  renderer: Renderer

  mesh: Mesh
  lookY = 0
  ballNotes = []

  ballLightness = 0.5

  scaleFactor = 1

  // DATA
  countries: Country[] = [
    {
      name: 'USA',
      gdp: 120, // billions
      population: 320, // million
    },
    {
      name: 'Germany',
      gdp: 20, // billions
      population: 80,
    },
    {
      name: 'China',
      gdp: 130, // billions
      population: 1400,
    }
  ]

  constructor(private midi: MIDIService) { }

  makeNotes() {
    let offset = -1200
    for (let i = 38; i <= 84; i++) {
      const ball = this.makeBall(10)
      const mat: any = ball.material
      let c: Color = mat.color

      const zIndex = i - 38
      const huePC = (zIndex % 12) / 12
      c.setHSL(huePC, 0.7, this.ballLightness)
      ball.userData.hue = huePC

      //ball.position.setY(i * 100)
      ball.position.setX(offset)
      offset += 50
      ball.visible = false
      this.scene.add(ball)
      this.ballNotes.push(ball)
    }
  }

  ngOnInit() {


    this.midi.knobs.master.observable.subscribe(value => {
      console.log('master is now at', value)
    })

    console.warn(this.midi.knobs)

    this.scene = new Scene()
    this.scene.background = new Color(0xffffff)

    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
    //this.camera = new OrthographicCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
    this.camera.position.z = 1000

    // lights
    const ambient = new AmbientLight(this.randomColorHex())
    const directional = new DirectionalLight(this.randomColorHex(), 0.1)

    // sample cube
    const geometry = new BoxGeometry(200, 200, 200)
    let material = <any>new MeshBasicMaterial({ color: 0xff0000, wireframe: true })
    material = <any>new MeshBasicMaterial({ color: 0xff0000, wireframe: false })
    this.mesh = new Mesh(geometry, material)
    // this.scene.add(this.mesh)

    // add lights
    this.scene.add(ambient)
    this.scene.add(directional)

    for (const country of this.countries) {
      // ball
      const ballGeo = new SphereGeometry(country.population, 10, 10)
      const ballMat = new MeshBasicMaterial({ color: 0xff0000, wireframe: true })
      const ballMesh = new Mesh(ballGeo, ballMat)
      //ballMesh.position.setY(country.population)
      //this.scene.add(ballMesh)
    }

    this.makeNotes()


    this.renderer = new WebGLRenderer()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.sceneContainer.nativeElement.appendChild(this.renderer.domElement)

    // kick off animation
    this.animate()


    this.midi.midiMessageObservable.subscribe(message => {
      this.onMIDIMessage(message)
    })

  }

  animate = () => {
    requestAnimationFrame(this.animate)
    this.mesh.rotation.x += 0.01
    this.mesh.rotation.y += 0.02
    //this.camera.lookAt(new Vector3(0, 0, 0))

    // reduce size on each loop
    for (const note of this.ballNotes) {
      const n: Mesh = note
      if (n.visible) {
        const scale = n.scale.x
        const newScale = scale <= 0 ? 0 : scale - 0.1
        n.scale.set(newScale, newScale, newScale)
        this.darkenBall(n)
      }
    }
    this.renderer.render(this.scene, this.camera)
  }

  onClick = () => {
    // nothing
  }

  randomColorHex() {
    return Math.random().toString(10).slice(2, 8)
  }


  onMIDIMessage = (message) => {

    //console.log(message)

    // highlight note
    /*const [type, key, pressure] = message.data
    const ball: Mesh = this.ballNotes[key - 36]
    if (type === 144) {
      // down
      ball.visible = true
      // reset ball color
      this.lightBall(ball)
      // scale the ball up, per pressure
      const newScale = pressure * this.scaleFactor
      ball.scale.set(newScale, newScale, newScale)
    } else if (type === 128) {
      // up (nothinh currently)
      // ball.visible = false
    } else if (type === 176 && key === 7) {
      this.scaleFactor = (pressure - 64) / 64
    }*/
  }

  /**
   * The problem was that you gave an 16 base string, instead of a random, 6 digit number.
   */

  makeBall = (size?: number) => {
    const ballGeo = new SphereGeometry(size, 10, 10)
    const ballMat = new MeshBasicMaterial({ color: 0xff0000, wireframe: true, opacity: 0.3, transparent: true, })
    const ballMesh = new Mesh(ballGeo, ballMat)
    return ballMesh
  }

  darkenBall(ball: any) {
    const mat: MeshBasicMaterial = ball.material
    const color: Color = mat.color
    const hsl = color.getHSL()
    const h = hsl.h
    const s = hsl.s - 0.0035
    // lighten test
    const l = hsl.l + 0.0035 // fadeout speed, make variable
    if (l > 1) {
      ball.visible = false
    }
    color.setHSL(h, s, l < 1 ? l : 1)
    //mat.opacity = 
    ball.material.needsUpdate = true
  }
  lightBall(ball: any) {
    ball.visible = true
    const mat: MeshBasicMaterial = ball.material
    const color: Color = mat.color
    const hsl = color.getHSL()
    const h = ball.userData.hue // hsl.h
    const s = 0.7 // hsl.s
    const l = this.ballLightness
    color.setHSL(h, s, l)
    ball.material.needsUpdate = true
    //console.log(ball)
  }


}
