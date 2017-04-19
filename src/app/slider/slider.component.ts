import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  template: `
  <div [ngStyle]="containerStyles[xyz]">
  <input 
    type="range" 
    [value]="val" 
    [min]="from" 
    [max]="to" 
    [step]="step"
    (input)="onInput($event)"
    [ngStyle]="styles[xyz]"
    />
    </div>
  `,
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input('val') val: number
  @Input('from') from: number
  @Input('to') to: number
  @Input('step') step: number
  @Input('xyz') xyz: string

  @Output() onChange: EventEmitter<number> = new EventEmitter()

  styles = {
    x: {
      'width.px': 200,
    },
    y: {
      'width.px': 200,
      'transform': 'perspective( 600px ) rotateZ(270deg)',
      'position': 'absolute',
      'left.px': -80,
      'top.px': 80,
    },
    z: {
      'transform': 'perspective( 300px ) rotateY( 45deg )',
      'width.px': 200,
    }
  }
  containerStyles = {
    x: {

    },
    y: {
      'width.px': 30,
      'height.px': 200,
      'position': 'relative',
    },
    z: {

    }
  }

  constructor() { }

  ngOnInit() {
  }

  onInput($event) {
    let val = parseFloat($event.target.value)
    this.onChange.emit(val)
  }

}
