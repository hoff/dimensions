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

  ngOnInit() {

    this.scene = new Scene()

    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
    this.camera.position.z = 1000

    const geometry = new BoxGeometry(200, 200, 200)
    const material = <any>new MeshBasicMaterial({ color: 0xff0000, wireframe: true })

    this.mesh = new Mesh(geometry, material)
    this.scene.add(this.mesh)
    console.log(this.mesh.material)



    for (const country of this.countries) {
      // ball
      const ballGeo = new SphereGeometry(country.population, 100, 100)
      const ballMat = new MeshBasicMaterial({ color: 0xff0000, wireframe: true })
      const ballMesh = new Mesh(ballGeo, ballMat)
      //ballMesh.position.setY(country.population)
      this.scene.add(ballMesh)
    }


    this.renderer = new WebGLRenderer()
    this.renderer.setSize(window.innerWidth, window.innerHeight)

    this.sceneContainer.nativeElement.appendChild(this.renderer.domElement)

    this.animate()
  }

  animate = () => {
    requestAnimationFrame(this.animate)
    this.mesh.rotation.x += 0.01
    this.mesh.rotation.y += 0.02
    //this.camera.lookAt(new Vector3(0, 0, 0))

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
  }

  randomColorHex() {
    return Math.random().toString(10).slice(2, 8)
  }

  onMIDISuccess(midiAccess) {
    // when we get a succesful response, run this code
    const midi = midiAccess // this is our raw MIDI data, inputs, outputs, and sysex status

    const inputs = midi.inputs.values()
    // loop over all available inputs and listen for any MIDI input
    for (let input = inputs.next(); input && !input.done; input = inputs.next()) {
      // each time there is a midi message call the onMIDIMessage function
      input.value.onmidimessage = this.onMIDIMessage
    }
  }

  onMIDIFailure(error) {
    // when we get a failed response, run this code
    console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + error);
  }
  onMIDIMessage(message) {
    const data = message.data; // this gives us our [command/channel, note, velocity] data.
    console.log('MIDI data', data); // MIDI data [144, 63, 73]
  }

  /**
   * The problem was that you gave an 16 base string, instead of a random, 6 digit number.
   */



}
