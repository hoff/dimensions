import { Injectable } from '@angular/core'

/*import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/Rx'*/

import { Observable, Subscribable } from 'rxjs/Observable'
import 'rxjs/Rx'

@Injectable()
export class MIDIService {

  midiMessageStream: any
  midiMessageObservable: Subscribable<any>

  knob1: Subscribable<any>
  knob1stream: any

  constructor() {
    const nav: any = navigator
    if (nav.requestMIDIAccess) {
      nav.requestMIDIAccess({
        sysex: false
      }).then(this.onMIDISuccess, this.onMIDIFailure);
    } else {
      alert('no midi support, sorry')
    }

    // create an observable with local stream source
    this.midiMessageObservable = new Observable(stream => {
      this.midiMessageStream = stream
    }).share()

    // set up knob1
    this.knob1 = new Observable(stream => {
      this.knob1stream = stream
    }).share()
  }

  onMIDISuccess = (midiAccess) => {
    console.log('midi connected')
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
    const [action, key, value] = message.data

    // the stream receives all midi messages
    this.midiMessageStream.next(message)

    // knob1 stream
    if (key === 91) {
      this.knob1stream.next(value)
    }
  }
}
