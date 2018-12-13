import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../propery.model';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  @Input() property: Property;

  constructor() { }

  ngOnInit() {
  }

}
