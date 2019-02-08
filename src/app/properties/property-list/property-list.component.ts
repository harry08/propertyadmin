import { Component, OnInit} from '@angular/core';
import { Property } from '../propery.model';
import { PropertyService } from '../property.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
// Manages a list of properties
export class PropertyListComponent implements OnInit {

  properties: Property[];

  constructor(private propertyService: PropertyService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.properties = this.propertyService.getProperties();  
  }

  onNewProperty() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
