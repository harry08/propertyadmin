import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { Property } from '../propery.model';
import { PropertyService } from '../property.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Namespace } from '../namespace.model';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
// Manages a list of properties
export class PropertyListComponent implements OnInit, OnDestroy {

  selectedNamespace: Namespace;

  properties: Property[];
  allNamespaces: Namespace[];
  
  propertiesSubscription: Subscription;

  namespacesSubscription: Subscription;

  constructor(private propertyService: PropertyService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.properties = this.propertyService.getProperties();  
    this.propertiesSubscription = this.propertyService.propertiesChanged
      .subscribe(
        (properties: Property[]) => {
          this.properties = properties;
          // Disselect any previeus selected property
          this.router.navigate([''], {relativeTo: this.route});
        }
      );

    this.allNamespaces = this.propertyService.getNamespaces(); 
    this.namespacesSubscription = this.propertyService.namespacesChanged
        .subscribe(
          (namespaces: Namespace[]) => {
            console.log('Propertylist as listener to changed namespaces.')
            this.allNamespaces = namespaces;  
            this.selectDefaultNamespace();
          }
        );
    this.selectDefaultNamespace();    
  }

  selectDefaultNamespace() {
    if (this.allNamespaces.length > 0 && this.selectedNamespace == undefined) {
      this.selectedNamespace = this.allNamespaces[0];
      this.onSelectNamespace();
    }
  }

  onNewProperty() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onSelectNamespace() {
    console.log('Namespace changed to: ' + this.selectedNamespace.name + ', id: ' + this.selectedNamespace.id);
    this.propertyService.setSelectedNamespace(this.selectedNamespace);
  }

  ngOnDestroy() {
    this.propertiesSubscription.unsubscribe();
    this.namespacesSubscription.unsubscribe();
  }
}
