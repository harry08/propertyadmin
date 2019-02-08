import { Component, OnInit } from '@angular/core';
import { Property } from '../propery.model';
import { PropertyService } from '../property.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  property: Property;
  id: number;

  constructor(private propertyService: PropertyService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          // + casts the String to a number
          this.id = +params['id'];
          this.property = this.propertyService.getProperty(this.id);
        }
      );
  }

  onEditProperty() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
