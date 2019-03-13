import { Component, OnInit, Input } from '@angular/core';

import { Namespace } from '../../namespace.model';

@Component({
  selector: 'app-namespace-item',
  templateUrl: './namespace-item.component.html',
  styleUrls: ['./namespace-item.component.css']
})
export class NamespaceItemComponent implements OnInit {

  @Input() namespace: Namespace;
  @Input() index: number;
  
  ngOnInit() {
  }
}
