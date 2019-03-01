import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { PropertyService } from '../property.service';
import { Property } from '../propery.model';

@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.css']
})
export class PropertyEditComponent implements OnInit {

  id: number;
  editMode = false;
  propertyForm: FormGroup

  constructor(private route: ActivatedRoute,
              private propertyService: PropertyService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];   
          this.editMode = params['id'] != null;    
          this.initForm();
        }
      );
  }

  onSubmit() {
    console.log(this.propertyForm);
    if (this.editMode) {
      // Would also be possible to create here a new Property object and fill it with the values
      // of the form like
      // const newProperty = new Property(this.propertyForm.value['name'], ...);
      // Pass this object then to the service
      this.propertyService.updateProperty(this.id, this.propertyForm.value);
    } else {
      this.propertyService.addProperty(this.propertyForm.value);
    }

    // To navigate
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let propertyName = '';
    let propertyDescription = '';
    let propertyValue = '';

    if (this.editMode) {
      const property = this.propertyService.getProperty(this.id);
      propertyName = property.name;
      propertyDescription = property.description;
      propertyValue = property.value;
    }

    this.propertyForm = new FormGroup({
      'name': new FormControl(propertyName),
      'description': new FormControl(propertyDescription),
      'value': new FormControl(propertyValue)
    });
  }
}
