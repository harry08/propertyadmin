import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../properties/property.service';

@Component({
  selector: 'app-namespaces',
  templateUrl: './namespaces.component.html',
  styleUrls: ['./namespaces.component.css'],
  providers: [PropertyService]
})
// Overall component holding the list on the left and the detail on the right.
export class NamespacesComponent implements OnInit {

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
  }
}