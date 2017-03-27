import { Component, ViewChild, ElementRef, OnInit } from '@angular/core'
import {
  Scene,
  Renderer,

  // camear
  PerspectiveCamera,
  OrbitControls,

  // material
  BoxGeometry,
  SphereGeometry,
  MeshBasicMaterial,

  // color
  Color,

  // universals
  Mesh,
  WebGLRenderer,
  Vector3,

} from 'three'

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

  makeNotes() {
    let offset = -1200
    for (let i = 38; i <= 84; i++) {
      const ball = this.makeBall(10)
      const mat: any = ball.material
      let c: Color = mat.color

      const zIndex = i - 38
      const huePC = (zIndex % 12) / 12
      c.setHSL(huePC, 0.7, 0.8)
      ball.userData.hue = huePC

      //ball.position.setY(i * 100)
      ball.position.setX(offset)
      offset += 50
      ball.visible = false
      this.scene.add(ball)
      this.ballNotes.push(ball)
      console.log(ball)
    }
  }

  ngOnInit() {

    this.scene = new Scene()

    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
    this.camera.position.z = 1000

    // sample cube
    const geometry = new BoxGeometry(200, 200, 200)
    const material = <any>new MeshBasicMaterial({ color: 0xff0000, wireframe: true })

    this.mesh = new Mesh(geometry, material)
    //this.scene.add(this.mesh)

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

    // init midi
    const nav: any = navigator
    if (nav.requestMIDIAccess) {
      nav.requestMIDIAccess({
        sysex: false
      }).then(this.onMIDISuccess, this.onMIDIFailure);
    } else {
      alert('no midi support, sorry');
    }
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
    const mat: any = this.mesh.material
    const rand = this.randomColorHex()
    mat.color.setHex(rand)

    // running and working
    console.log(mat, rand)

    // change camera
    this.lookY = this.lookY - 20
    console.log(this.lookY)
    this.camera.lookAt(new Vector3(0, this.lookY, 0))

    this.renderer.render(this.scene, this.camera)

    // test
    this.darkenBall(this.ballNotes[10])
  }

  randomColorHex() {
    return Math.random().toString(10).slice(2, 8)
  }

  onMIDISuccess = (midiAccess) => {
    console.log('on midi succesful')
    // when we get a succesful response, run this code
    const midi = midiAccess // this is our raw MIDI data, inputs, outputs, and sysex status

    const inputs = midi.inputs.values()
    // loop over all available inputs and listen for any MIDI input
    for (let input = inputs.next(); input && !input.done; input = inputs.next()) {
      // each time there is a midi message call the onMIDIMessage function
      input.value.onmidimessage = this.onMIDIMessage
    }
  }

  onMIDIFailure = (error) => {
    // when we get a failed response, run this code
    console.log('No access to MIDI devices or your browser does not support WebMIDI API.')
  }
  onMIDIMessage = (message) => {

    console.log(message.data)

    // highlight note
    const [type, key, pressure] = message.data
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
      // up
      //ball.visible = false
    } else if (type === 176 && key === 7) {
      this.scaleFactor = (pressure - 64) / 64
    }

    // radom color test
    const mat: any = this.mesh.material
    const rand = this.randomColorHex()
    mat.color.setHex(rand)
  }

  /**
   * The problem was that you gave an 16 base string, instead of a random, 6 digit number.
   */

  makeBall = (size?: number) => {
    const ballGeo = new SphereGeometry(size, 10, 10)
    const ballMat = new MeshBasicMaterial({ color: 0xff0000, wireframe: true })
    const ballMesh = new Mesh(ballGeo, ballMat)
    return ballMesh
  }

  darkenBall(ball: any) {
    const mat: MeshBasicMaterial = ball.material
    const color: Color = mat.color
    const hsl = color.getHSL()
    const h = hsl.h
    const s = hsl.s
    const l = hsl.l - 0.005 // fadeout speed, make variable
    color.setHSL(h, s, l)
  }
  lightBall(ball: any) {
    const mat: MeshBasicMaterial = ball.material
    const color: Color = mat.color
    const hsl = color.getHSL()
    const h = ball.userData.hue // hsl.h
    const s = 0.7 // hsl.s
    const l = 0.8 // make constatn, back up
    color.setHSL(h, s, l)
  }


}
