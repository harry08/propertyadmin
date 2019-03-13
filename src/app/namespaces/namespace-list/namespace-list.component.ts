import { OnInit, OnDestroy, Component } from "@angular/core";
import { Namespace } from "../namespace.model";
import { NamespaceService } from "../namespace.service";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-namespace-list',
  templateUrl: './namespace-list.component.html',
  styleUrls: ['./namespace-list.component.css']
})
// Manages a list of namespaces
export class NamespaceListComponent implements OnInit, OnDestroy {

  namespaces: Namespace[];
  subscription: Subscription;

  constructor(private namespaceService: NamespaceService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // Subscribes as a listener for changes in the Property Service
    this.subscription = this.namespaceService.namespacesChanged
      .subscribe(
        (namespaces: Namespace[]) => {
          this.namespaces = namespaces;
        }
      );
    this.namespaces = this.namespaceService.getNamespaces();
  }

  onNewNamespace() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}