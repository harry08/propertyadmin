import { Component, OnInit } from '@angular/core';
import { Property } from './propery.model';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
// Overall component holding the list on the left and the detail on the right.
export class PropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
