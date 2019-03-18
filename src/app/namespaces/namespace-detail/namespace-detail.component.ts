import { Component, OnInit } from '@angular/core';
import { Namespace } from '../namespace.model';
import { NamespaceService } from '../namespace.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-namespace-detail',
  templateUrl: './namespace-detail.component.html',
  styleUrls: ['./namespace-detail.component.css']
})
export class NamespaceDetailComponent implements OnInit {

  namespace: Namespace;
  id: number;

  constructor(private namespaceService: NamespaceService,
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
          this.namespace = this.namespaceService.getNamespace(this.id);
        }
      );
  }

  onEditNamespace() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteNamespace() {
    this.namespaceService.deleteNamespace(this.id);
    this.router.navigate(['/namespaces']);
  }
}
