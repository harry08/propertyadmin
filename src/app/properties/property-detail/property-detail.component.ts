import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../propery.model';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  @Input() property: Property;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
  }

}
