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
import { NamespaceService } from './namespaces/namespace.service';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

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
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PropertyService, NamespaceService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }