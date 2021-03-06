import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { PropertyDetailComponent } from './properties/property-detail/property-detail.component';
import { PropertyItemComponent } from './properties/property-list/property-item/property-item.component';
import { PropertyStartComponent } from './properties/property-start/property-start.component';
import { NamespaceListComponent } from './namespaces/namespace-list/namespace-list.component';
import { NamespaceDetailComponent } from './namespaces/namespace-detail/namespace-detail.component';
import { NamespaceItemComponent } from './namespaces/namespace-list/namespace-item/namespace-item.component';
import { NamespaceStartComponent } from './namespaces/namespace-start/namespace-start.component';
import { NamespaceEditComponent } from './namespaces/namespace-edit/namespace-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app.routing.module';
import { NamespacesComponent } from './namespaces/namespaces.component';
import { PropertyEditComponent } from './properties/property-edit/property-edit.component';
import { PropertyService } from './properties/property.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropertiesComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    PropertyItemComponent,
    PropertyStartComponent,
    NamespacesComponent,
    NamespaceListComponent,
    NamespaceDetailComponent,
    NamespaceItemComponent,
    NamespaceStartComponent,
    NamespaceEditComponent,
    DropdownDirective,
    PropertyEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }