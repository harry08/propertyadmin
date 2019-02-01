import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { PropertiesComponent } from './properties/properties.component';
import { NamespacesComponent } from './namespaces/namespaces.component';
import { PropertyStartComponent } from './properties/property-start/property-start.component';
import { PropertyDetailComponent } from './properties/property-detail/property-detail.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/properties', pathMatch: 'full' },
    { path: 'properties', component: PropertiesComponent, children: [
        { path: '', component: PropertyStartComponent },
        { path: ':id', component: PropertyDetailComponent }
    ] },
    { path: 'namespaces', component : NamespacesComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}