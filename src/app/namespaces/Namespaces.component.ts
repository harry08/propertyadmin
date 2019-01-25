import { Component, OnInit } from '@angular/core';
import { Namespace } from './namespace.model';
import { NamespaceService } from './namespace.service';

@Component({
  selector: 'app-namespaces',
  templateUrl: './namespaces.component.html',
  styleUrls: ['./namespaces.component.css'],
  providers: [NamespaceService]
})
// Overall component holding the list on the left and the detail on the right.
export class NamespacesComponent implements OnInit {

  constructor(private namespaceServicxe: NamespaceService) {}

  ngOnInit() {
  }
}