import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { PropertiesComponent } from './properties/properties.component';
import { NamespacesComponent } from './namespaces/Namespaces.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/properties', pathMatch: 'full' },
    { path: 'properties', component : PropertiesComponent },
    { path: 'namespaces', component : NamespacesComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}