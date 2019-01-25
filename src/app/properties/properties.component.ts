import { Component, OnInit } from '@angular/core';
import { Property } from './propery.model';
import { PropertyService } from './property.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
  providers: [PropertyService]
})
// Overall component holding the list on the left and the detail on the right.
export class PropertiesComponent implements OnInit {

  selectedProperty : Property

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    // Subscribes as a listener for changes in the selected Property.
    this.propertyService.propertySelected
      .subscribe(
        (property: Property) => { // Argument list
          this.selectedProperty = property;
        }
      );
  }
}
