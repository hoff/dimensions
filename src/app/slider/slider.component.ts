import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  template: `
  <input 
    type="range" 
    [value]="val" 
    [min]="from" 
    [max]="to" 
    [step]="step" 
    (input)="onInput($event)"
    />
  `,
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input('val') val: number
  @Input('from') from: number
  @Input('to') to: number
  @Input('step') step: number

  @Output() onChange: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onInput($event) {
    let val = parseFloat($event.target.value)
    this.onChange.emit(val)
  }

}
