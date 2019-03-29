import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { PropertyService } from 'src/app/properties/property.service';

@Component({
  selector: 'app-namespace-edit',
  templateUrl: './namespace-edit.component.html',
  styleUrls: ['./namespace-edit.component.css']
})
export class NamespaceEditComponent implements OnInit {

  id: number;
  editMode = false;
  namespaceForm: FormGroup

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
    console.log(this.namespaceForm);
    if (this.editMode) {
      // Would also be possible to create here a new Namespace object and fill it with the values
      // of the form like
      // const newNamespace = new Namespace(this.namespaceForm.value['name'], ...);
      // Pass this object then to the service
      this.propertyService.updateNamespace(this.id, this.namespaceForm.value);
    } else {
      this.propertyService.addNamespace(this.namespaceForm.value);
    }

    // To navigate
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let namespaceId = '';
    let namespaceName = '';
    let namespaceDescription = '';

    if (this.editMode) {
      const namespace = this.propertyService.getNamespace(this.id);
      namespaceId = namespace.id;
      namespaceName = namespace.name;
      namespaceDescription = namespace.description;
    }

    this.namespaceForm = new FormGroup({
      'id': new FormControl(namespaceId),
      'name': new FormControl(namespaceName),
      'description': new FormControl(namespaceDescription)
    });
  }
}
