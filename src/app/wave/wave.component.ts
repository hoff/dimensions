import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  NgZone
} from "@angular/core";

import { Show } from "../show";
import { MIDIService, MIDIMessage } from "../midi.service";
import { AnimationService } from "../animation.service";

import { Piano } from "../piano";

import * as THREE from "three";
import OrbitControls from 'orbit-controls-es6'

import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-wave",
  template: `
  <div #container style="width: 100vw; height: 100vh;"
  >
  </div>
  <div id="panel" style="position:fixed; top: 0; left: 0; width: 300px; height: 100%; padding: 20px;">
  <button *ngFor="let song of midi.songList" (click)="midi.playSong( song )">{{ song.name }}</button>
  </div>
  `,
  styleUrls: ["./wave.component.css"]
})
export class WaveComponent implements OnInit {
  @ViewChild("container") container: ElementRef;
  frame = 0;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  mesh: any;
  controls: OrbitControls

  public frameSubject = new Subject<number>();
  constructor(
    public midi: MIDIService,
  ) {}

  animate() {
    this.frameSubject.next(this.frame);
    this.frame += 1;
    requestAnimationFrame(() => this.animate());
  }

  ngOnInit() {
    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      100
    );
    this.camera.position.z = 30;

    this.scene = new THREE.Scene();

    let geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    let material = new THREE.MeshNormalMaterial();

    this.mesh = new THREE.Mesh(geometry, material);
    // this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    let sceneElement = this.container.nativeElement;
    sceneElement.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enabled = true;
    this.controls.maxDistance = 1500;
    this.controls.minDistance = 0;
    this.controls.autoRotate = false
    this.controls.noZoom = false

    this.frameSubject.subscribe(frame => {
      this.renderer.render(this.scene, this.camera);
    });

    // create a wave for each key!
    /* let F0 = new Wave(100, this.scene, this.frameSubject, this.midi)
    let F1 = new Wave(200, this.scene, this.frameSubject, this.midi)
    let C1 = new Wave(300, this.scene, this.frameSubject, this.midi)
    let F2 = new Wave(400, this.scene, this.frameSubject, this.midi)
    let A2 = new Wave(500, this.scene, this.frameSubject, this.midi) */
    
    // where 0 is low f. go back to the end
    for (let i = -5; i < 44; i++) {
      let nameIndex = (i + 5) % 12
      let noteName = noteNames[nameIndex]
      let frequency = Math.pow(2, i / 12) * 100
      let midiKey = i + 41
      let waveParams = {
        noteName
      }
      new Wave(frequency, this.scene, this.frameSubject, this.midi, midiKey, waveParams)
    }
    

    this.animate();
  }
}

/**
 * A wave of a given wavelength or frequency.
 * she places her elements
 */
class Wave {

  wavelength: number
  elementCount = 400
  elements = new THREE.Object3D()
  // how many degrees does the wave contain?
  totalDegrees: number
  totalLength = 100
  hsl: {h: number, s: number, l: number}
  mat = new THREE.MeshBasicMaterial()
  currentL: number
  sustained = false
  amplitude: number

  constructor(
    public frequency: number, // say: 100 F1, or 200 F2
    public scene: THREE.Scene,
    public frameSubject: Subject<number>,
    public midi: MIDIService,
    public midiKey: number,
    public waveParams: {noteName: string},
  ) {
    this.hsl = COLORS[this.waveParams.noteName]
    this.currentL = this.hsl.l

    this.wavelength = 10000 / this.frequency // say: 100 F1, 50 F2
    this.totalDegrees = 3.6 * this.frequency // 360 F1, or 720 F2
    this.totalDegrees *= 2

    this.makeElements()
    this.elements.visible = false

    Observable.fromEvent(window, 'keydown').subscribe((event: any) => {
      if (event.keyCode === this.midiKey) {
        this.elements.visible = !this.elements.visible
      }
    }) 

    this.midi.stream.filter(msg => msg.key === this.midiKey).subscribe(msg => {
      if (msg.name === 'keydown') {
        this.sustained = true
        this.elements.visible = true
        this.fadeOut()
        this.log()
      }
      if (msg.name === 'keyup') {
        this.sustained = false
        // this.fadeOut()
      }
    })
  }

  /**
   * this fine function reduces the lightness of our wave 
   * make it dependent on if we are sustained or not
   */
  fadeOut() {

    // hit, actually
     // reset
     this.currentL = this.hsl.l
     this.mat.color.setHSL(this.hsl.h, this.hsl.s, 1)

    let sub = this.frameSubject.subscribe(frame => {
      // set lightness down
      let sustainedDown = 0.005
      let keyoffDown = 0.050
      this.currentL -= this.sustained ? sustainedDown : keyoffDown
      this.mat.color.setHSL(this.hsl.h, this.hsl.s, this.currentL)
      if (this.currentL < 0.1) {
        this.elements.visible = false
        // reset
        this.currentL = this.hsl.l
        this.mat.color.setHSL(this.hsl.h, this.hsl.s, 1)
        unsub()
      }
    })
    let unsub = () => {
      sub.unsubscribe()
    }
  }

  makeElements() {
    for (let i = 0; i < this.elementCount; i++ ){
      let positionOnWaveDecimal = i / this.elementCount // say 0 for first, or .25 for 25th
      let degree = (this.totalDegrees * positionOnWaveDecimal) % 360

      let oneMore = Math.log2(this.frequency) - 6.643856189774724

      this.amplitude = (1 - oneMore * 3) + 10

      let geo = new THREE.BoxGeometry(0.3, 0.03, 0.04)
      
      this.mat.color.setHSL(this.hsl.h, this.hsl.s, this.hsl.l)
      
      let mesh = new THREE.Mesh(geo, this.mat);
      let mirrorMesh = new THREE.Mesh(geo, this.mat)

      // place x (linear along wave)
      let positionX = (this.totalLength * positionOnWaveDecimal) - (this.totalLength / 2)
      mesh.position.x = positionX
      mirrorMesh.position.x = positionX

      // position y (todo: amplitude)
      let y = this.amplitude * Math.sin(toRadians(degree))
      mesh.position.y = y
      mirrorMesh.position.y = y * -1

      let slope = this.amplitude * Math.cos(toRadians(degree))
      let angle = calcAngle(slope)
      mesh.rotation.z = angle

      let mirroSlope = this.amplitude * Math.cos(toRadians(degree))
      let mirroAngle = calcAngle(mirroSlope)
      mirrorMesh.rotation.z = mirroAngle

      this.elements.add(mesh)
      this.elements.add(mirrorMesh)

    }
    this.scene.add(this.elements)
  }

  log() {
    console.log('wave key', this.waveParams.noteName, 'frequency', this.frequency, 'amplitude', this.amplitude)
  }

}

function toRadians(degree) {
  return degree * (Math.PI / 180);
}

function toDegrees (radians) {
  return radians * (180 / Math.PI);
}


function calcAngle(slope) {
  return Math.atan(slope);
}

const COLORS = {
  A: { h: 56 / 360, s: 1.0, l: 0.6 }, // yellow
  "A#": { h: (56 + 323) / 2, s: 0.99, l: 0.6 }, // 'brown',
  B: { h: 323 / 350, s: 0.96, l: 0.6 }, // 'pink',
  C: { h: 0.44, s: 0.96, l: 0.6 }, // 'white',
  "C#": { h: 0.44, s: 0.96, l: 0.6 }, // 'dunno',
  D: { h: 39 / 360, s: 1, l: 0.6 }, // 'orange',
  "D#": { h: 0.24, s: 0.5, l: 0.8 }, // 'dunno',
  E: { h: 112 / 360, s: 0.65, l: 0.6 }, // 'green',
  F: { h: 226 / 360, s: 1, l: 0.8 }, // 'blue',
  "F#": { h: 266 / 360, s: 0.65, l: 0.6 }, // 'violet',
  G: { h: 350 / 360, s: 1, l: 0.6 }, // 'red',
  "G#": { h: 0, s: 0.36, l: 0.6 } // brown,
};
const noteNames = [
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
];