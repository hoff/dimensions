import { Injectable } from '@angular/core'

/*import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/Rx'*/

import { Observable, Subscribable } from 'rxjs/Observable'
import 'rxjs/Rx'

@Injectable()
export class MIDIService {

  /**
   * Observable and Stream for ALL midi messages
   */
  midiMessageStream: any
  midiMessageObservable: Subscribable<any>

  /**
   * Knob data for creating know observables and streams
   */
  knobs: any = {}
  knobSettings = [
    {
      name: 'master',
      midiKey: 7,
    },
    /** TOP KNOBS */
    {
      name: 'knob1',
      midiKey: 91,
    },
    {
      name: 'knob2',
      midiKey: 93,
    },
    {
      name: 'knob3',
      midiKey: 74,
    },
    {
      name: 'knob4',
      midiKey: 71,
    },
    {
      name: 'knob5',
      midiKey: 73,
    },
    {
      name: 'knob6',
      midiKey: 75,
    },
    {
      name: 'knob7',
      midiKey: 72,
    },
    {
      name: 'knob8',
      midiKey: 10,
    }
  ]
  // mapping midi keys to knob names (dynamcally created from above)
  knobMap = { }

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


  /**
   * Create knob objects, which contain the knob's observable, and her stream
   *
   * Create a mapping, so when a midi key comes in, we can find the correponding stream to pass the value down to
   */
    for (const knob of this.knobSettings) {
      const knobObservable = new Observable(knobStream => {
        this.knobs[knob.name] = {observable: knobObservable, stream: knobStream}
        this.knobMap[knob.midiKey] = knob.name
      }).share()
      knobObservable.subscribe()
    }
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


    // write to knob stream if incoming key (e.g. 93) maps
    if (action === 176 && this.knobMap[key]) {
      console.log('got a mapping to key', key, this.knobMap[key])
      const knobKey = this.knobMap[key]
      this.knobs[knobKey].stream.next(value / 127)
    }
  }
}
