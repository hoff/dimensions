import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {

  @Input('width') width: number
  @Input('height') height: number

  constructor() { }

  ngOnInit() {
  }

}
