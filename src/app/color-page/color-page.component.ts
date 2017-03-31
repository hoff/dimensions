import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'

import { MIDIService } from '../midi.service'

import {
  Scene,
  Renderer,

  // camera
  PerspectiveCamera,
  OrthographicCamera,
  //OrbitControls,
  CameraHelper,

  // controls


  // geometries
  BoxGeometry,
  SphereGeometry,

  // Light
  AmbientLight,
  DirectionalLight,
  DirectionalLightHelper,

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

import OrbitControls from 'orbit-controls-es6'


@Component({
  selector: 'app-color-page',
  templateUrl: './color-page.component.html',
  styleUrls: ['./color-page.component.css']
})
export class ColorPageComponent implements OnInit {

  hueDecimal = 0.5
  satDecimal = 0.8
  lightDecimal = 0.5

  constructor(
    private midi: MIDIService,
  ) {
    this.midi.knobs.knob1.observable.subscribe(decimal => {
      this.hueDecimal = decimal
    })
    this.midi.knobs.knob2.observable.subscribe(decimal => {
      this.satDecimal = decimal
    })
    this.midi.knobs.knob3.observable.subscribe(decimal => {
      this.lightDecimal = decimal
    })
  }

  ngOnInit() {
  }

  hslString() {
    const hue = 360 * this.hueDecimal
    const sat = 100 * this.satDecimal + '%'
    const light = 100 * this.lightDecimal + '%'
    return `hsl(${hue}, ${sat}, ${light})`
  }

}

