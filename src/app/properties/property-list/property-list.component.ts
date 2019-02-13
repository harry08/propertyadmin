import { Component, OnInit, OnDestroy} from '@angular/core';
import { Property } from '../propery.model';
import { PropertyService } from '../property.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
// Manages a list of properties
export class PropertyListComponent implements OnInit, OnDestroy {

  properties: Property[];
  subscription: Subscription;

  constructor(private propertyService: PropertyService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // Subscribes as a listener for changes in the Property Service
    this.subscription = this.propertyService.propertiesChanged
      .subscribe(
        (properties: Property[]) => {
          this.properties = properties;
        }
      );
    this.properties = this.propertyService.getProperties();  
  }

  onNewProperty() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
