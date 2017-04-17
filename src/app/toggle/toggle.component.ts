import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `
  <input 
    type="checkbox"
    [value]="val"
    (change)="onInput($event)"
  />
  `,
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  @Input('val') val: boolean
  @Output() onChange: EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onInput($event) {
      this.onChange.emit($event.target.checked)
  }

}
