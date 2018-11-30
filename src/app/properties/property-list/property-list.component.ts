import { Component, OnInit } from '@angular/core';
import { Property } from '../propery.model';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
// Manages a list of properties
export class PropertyListComponent implements OnInit {
  properties: Property[] = [
    new Property("username", "Name of the user", "k001234"),
    new Property("outputpath", "Path to output folder", "./test/output"),
    new Property("inputfile", "Path to input file", "./test/test.csv")
  ];

  constructor() { }

  ngOnInit() {
  }

}
