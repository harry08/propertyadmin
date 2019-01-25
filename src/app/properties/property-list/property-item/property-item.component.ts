import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { Property } from '../../propery.model';
import { PropertyService } from '../../property.service';

@Component({
  selector: 'app-property-item',
  templateUrl: './property-item.component.html',
  styleUrls: ['./property-item.component.css']
})
export class PropertyItemComponent implements OnInit {

  @Input() property: Property;
  
  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
  }

  // Called from property-item.component.html when this property is selected.
  onSelected() {
    // Sets the selected property in the PropertyService. 
    // The PropertyService takes care of throwing the events for the selected property.
    this.propertyService.propertySelected.emit(this.property);
  }
}
