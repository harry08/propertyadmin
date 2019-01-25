import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { PropertyDetailComponent } from './properties/property-detail/property-detail.component';
import { PropertyItemComponent } from './properties/property-list/property-item/property-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app.routing.module';
import { NamespacesComponent } from './namespaces/Namespaces.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropertiesComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    PropertyItemComponent,
    NamespacesComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
