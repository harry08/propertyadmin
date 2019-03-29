import { OnInit, OnDestroy, Component } from "@angular/core";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { Namespace } from "src/app/properties/namespace.model";
import { PropertyService } from "src/app/properties/property.service";

@Component({
  selector: 'app-namespace-list',
  templateUrl: './namespace-list.component.html',
  styleUrls: ['./namespace-list.component.css']
})
// Manages a list of namespaces
export class NamespaceListComponent implements OnInit, OnDestroy {

  namespaces: Namespace[];
  subscription: Subscription;

  constructor(private propertyService: PropertyService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // Subscribes as a listener for changes in the Property Service
    this.subscription = this.propertyService.namespacesChanged
      .subscribe(
        (namespaces: Namespace[]) => {
          this.namespaces = namespaces;
        }
      );
    this.namespaces = this.propertyService.getNamespaces();
  }

  onNewNamespace() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}