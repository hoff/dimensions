import { Component, OnInit, ChangeDetectorRef } from '@angular/core'
import { DomSanitizer, SafeStyle, SafeResourceUrl, SafeUrl } from '@angular/platform-browser'

import * as THREE from 'three'

import { MIDIService } from '../midi.service'

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

  baseKeyboard: Keyboard

  noteNames = ['A', 'Bb', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']

  noteColors = {
    A: [88, 86, 214],
    Bb: [255, 240, 230],
    B: [52, 170, 220],
    C: [90, 200, 250],
    'C#': [255, 420, 230],
    D: [76, 217, 100],
    'D#': [76, 255, 100], // todo
    E: [255, 204, 0],
    F: [255, 149, 0],
    'F#': [255, 100, 0],
    G: [255, 59, 48],
    'G#': [255, 420, 230],
  }

  noteHSLAs = {
    'A': [67, '61%', '59%', 1],
    'Bb': [7, '100%', '95%', 1],
    'B': [55, '71%', '53%', 1],
    'C': [55, '94%', '67%', 1],
    'C#': [31, '-135%', '127%', 1],
    'D': [36, '65%', '57%', 1],
    'D#': [36, '100%', '65%', 1],
    'E': [13, '100%', '50%', 1],
    'F': [10, '100%', '50%', 1],
    'F#': [7, '100%', '50%', 1],
    'G': [1, '100%', '59%', 1],
    'G#': [31, '-135%', '127%', 1],
  }

  nextHSLAs = {
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
    let hsla = this.nextHSLAs[noteName]
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

      // A
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




  rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max === min) { h = s = 0; }
    else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }

      h /= 6;
    }

    return [(h * 100 + 0.5) | 0, ((s * 100 + 0.5) | 0) + '%', ((l * 100 + 0.5) | 0) + '%'];
  }



  constructor(
    public midi: MIDIService,
    public ref: ChangeDetectorRef,
    public sanitizer: DomSanitizer,
  ) {
    this.baseKeyboard = new Keyboard('base')
    this.baseKeyboard.setup(this.midi, this.sanitizer)
  }

  ngOnInit() {
    this.midi.stream.subscribe(msg => {
      this.ref.detectChanges()
    })
  }

  fakeKeypress($event, note: Note) {
    console.log($event, note)
    this.midi.source.next({ key: note.midiKey, control: 'tastatur', 'name': 'keydown', keyName: note.name })
  }

}

class Keyboard {

  midi: MIDIService
  sanitizer: DomSanitizer

  notes = []
  noteNames = ['A', 'Bb', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']

  noteColors = {
    A: [88, 86, 214],
    Bb: [255, 240, 230],
    B: [52, 170, 220],
    C: [90, 200, 250],
    'C#': [255, 420, 230],
    D: [76, 217, 100],
    'D#': [76, 255, 100], // todo
    E: [255, 204, 0],
    F: [255, 149, 0],
    'F#': [255, 100, 0],
    G: [255, 59, 48],
    'G#': [255, 420, 230],
  }

  noteHSLAs = {

  }

  constructor(
    public name: string,
    public keys: number = 88,
  ) {

  }

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
      let colorRGB = this.noteColors[name]

      let note = new Note(this.midi, this.sanitizer, name, midiKey, octave, position, colorRGB)
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
    public colorRGB: number[],
  ) {

  }

  rgbString() {

    return `rgb(${this.colorRGB[0]}, ${this.colorRGB[1]}, ${this.colorRGB[2]})`
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

const noteHSLAs = {
  'A': [67, '61%', '59%', 1],
  'Bb': [7, '100%', '95%', 1],
  'B': [55, '71%', '53%', 1],
  'C': [55, '94%', '67%', 1],
  'C#': [31, '-135%', '127%', 1],
  'D': [36, '65%', '57%', 1],
  'D#': [36, '100%', '65%', 1],
  'E': [13, '100%', '50%', 1],
  'F': [10, '100%', '50%', 1],
  'F#': [7, '100%', '50%', 1],
  'G': [1, '100%', '59%', 1],
  'G#': [31, '-135%', '127%', 1],
}
