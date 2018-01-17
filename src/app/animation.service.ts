import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import { Subscriber } from 'rxjs/Subscriber'

import { Subject } from 'rxjs/Subject'

@Injectable()
export class AnimationService {

  beforeRenderSource: Subscriber<any>
  beforeRenderStream: Observable<any>

  measureSubject = new Subject<string>()


  EasingFunctions = {
    // no easing, no acceleration
    linear: function (t) { return t },
    // accelerating from zero velocity
    easeInQuad: function (t) { return t * t },
    // decelerating to zero velocity
    easeOutQuad: function (t) { return t * (2 - t) },
    // acceleration until halfway, then deceleration
    easeInOutQuad: function (t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t },
    // accelerating from zero velocity
    easeInCubic: function (t) { return t * t * t },
    // decelerating to zero velocity
    easeOutCubic: function (t) { return (--t) * t * t + 1 },
    // acceleration until halfway, then deceleration
    easeInOutCubic: function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 },
    // accelerating from zero velocity
    easeInQuart: function (t) { return t * t * t * t },
    // decelerating to zero velocity
    //easeOutQuart: function (t) { return 1 - (--t) * t * t * t },
    // acceleration until halfway, then deceleration
    //easeInOutQuart: function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t },
    // accelerating from zero velocity
    easeInQuint: function (t) { return t * t * t * t * t },
    // decelerating to zero velocity
    easeOutQuint: function (t) { return 1 + (--t) * t * t * t * t },
    // acceleration until halfway, then deceleration
    easeInOutQuint: function (t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t },

    bounce: function (t) {
      let p = 0.3;
      return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
    },

    /*parabola: function (t) {
      let a = -1
      let x = t - 3
      return a * (x * x)
    }*/

  }

  constructor() { 
    this.beforeRenderStream = new Observable(source => {
      this.beforeRenderSource = source
    }).share()
    console.log('animation service constructed', this.beforeRenderSource)
    // if nobody subscribe, the above does not work
    this.beforeRenderStream.subscribe()
  }

  // replace with reactvie version
  animateValue(easing, durationMS, from, to, obj, key, whendone) {
    let start = new Date().getTime()
    let end = start + durationMS

    let step = () => {

      let now = new Date().getTime()
      let progress

      if (now > end) {
        progress = 1
      } else {
        progress = (now - start) / durationMS // percent as decimal
      }
      // now you know how much progress you've made. use this to calculate position!
      let easingProgress = this.EasingFunctions[easing](progress)
      let delta = to - from
      // set current
      let currentVal = (delta * easingProgress) + from
      // this works, we are now manipulating the object directly
      obj[key] = currentVal
      // call yourself
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        if (whendone) {
          whendone()
        }
      }
    }
    step()
  }

  /** observable easing functions! */

  animateEasing(easing, durationMS) {

    return new Observable(stream => {
      let start = new Date().getTime()
      let end = start + durationMS

      let step = () => {

        let now = new Date().getTime()
        let progress

        if (now > end) {
          progress = 1
        } else {
          progress = (now - start) / durationMS // percent as decimal
        }
        // now you know how much progress you've made. use this to calculate position!
        let easingProgress: number = this.EasingFunctions[easing](progress)
        stream.next(easingProgress)

        // call yourself
        if (progress < 1) {
          requestAnimationFrame(step)
        }
      }
      step()
    }).share()


  }

}
