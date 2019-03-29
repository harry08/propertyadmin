import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Namespace } from 'src/app/properties/namespace.model';
import { PropertyService } from 'src/app/properties/property.service';

@Component({
  selector: 'app-namespace-detail',
  templateUrl: './namespace-detail.component.html',
  styleUrls: ['./namespace-detail.component.css']
})
export class NamespaceDetailComponent implements OnInit {

  namespace: Namespace;
  id: number;

  constructor(private propertyService: PropertyService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          console.log('NamespaceDetailComponent.ngOnInit: ' + params);
          
          // + casts the String to a number
          this.id = +params['id'];
          this.namespace = this.propertyService.getNamespace(this.id);
        }
      );
  }

  onEditNamespace() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteNamespace() {
    this.propertyService.deleteNamespace(this.id);
    this.router.navigate(['/namespaces']);
  }
}
