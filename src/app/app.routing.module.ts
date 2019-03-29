import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { PropertiesComponent } from './properties/properties.component';
import { PropertyStartComponent } from './properties/property-start/property-start.component';
import { PropertyDetailComponent } from './properties/property-detail/property-detail.component';
import { PropertyEditComponent } from './properties/property-edit/property-edit.component';
import { NamespacesComponent } from './namespaces/namespaces.component';
import { NamespaceStartComponent } from './namespaces/namespace-start/namespace-start.component';
import { NamespaceDetailComponent } from './namespaces/namespace-detail/namespace-detail.component';
import { NamespaceEditComponent } from './namespaces/namespace-edit/namespace-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/properties', pathMatch: 'full' },
    { path: 'properties', component: PropertiesComponent, children: [
        { path: '', component: PropertyStartComponent },
        //{ path: 'new', component: PropertyEditComponent, canActivate: [AuthGuard] },
        { path: 'new', component: PropertyEditComponent },
        { path: ':id', component: PropertyDetailComponent },
        //{ path: ':id/edit', component: PropertyEditComponent, canActivate: [AuthGuard] }
        { path: ':id/edit', component: PropertyEditComponent }
    ] },
    { path: 'namespaces', component: NamespacesComponent, children: [
        { path: '', component: NamespaceStartComponent },
        //{ path: 'new', component: NamespaceEditComponent, canActivate: [AuthGuard] },
        { path: 'new', component: NamespaceEditComponent },
        { path: ':id', component: NamespaceDetailComponent },
        //{ path: ':id/edit', component: NamespaceEditComponent, canActivate: [AuthGuard] }
        { path: ':id/edit', component: NamespaceEditComponent, canActivate: [AuthGuard] }
    ] },    
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}