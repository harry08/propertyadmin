import { Injectable, EventEmitter } from "@angular/core";
import { Subject, Observable } from 'rxjs';
import { Property } from "./propery.model";
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators";
import { Namespace } from "./namespace.model";

/**
 * Offers CRUD functionalitsy for Properties and Namespaces.
 * DataStorage via Json-Server is done here.
 */
@Injectable()
export class PropertyService {

    propertiesChanged = new Subject();
    namespacesChanged = new Subject();

    private properties : Property[] = [];

    private namespaces : Namespace[] = [];

    constructor(private http: Http) {
        this.loadProperties();
        this.loadNamespaces();
    }

    loadProperties() {
        console.log('PropertyService load all properties...');
        this.readAllProperties()
            .subscribe(properties => {
                console.log('Nr of read properties: ' + properties.length);
                this.setProperties(properties);
            });
    }

    private setProperties(properties: Property[]) {
        this.properties = properties;
        this.propertiesChanged.next(this.properties.slice());
    }

    getProperties() : Property[] {
        // slice returns a new array which is an exact copy.
        return this.properties.slice();
    }

    getProperty(id: number) : Property {
        return this.properties[id];
    }

    addProperty(property: Property) {
        console.log('add new property: ' + property.name);
        this.storeNewProperty(property)
            .subscribe(property => {
                console.log('Property added: ' + property.name + ', id: ' + property.id);

                this.properties.push(property);
                this.propertiesChanged.next(this.properties.slice());
            });
    }

    updateProperty(index: number, property: Property) {
        console.log('update property with id: ' + property.id);    
        this.storeProperty(property)
            .subscribe(updatedProperty => {
                console.log('Property with id ' + updatedProperty.id + ' updated. Name: ' + updatedProperty.name);

                this.properties[index] = updatedProperty;
                this.propertiesChanged.next(this.properties.slice());
            });
    }

    deleteProperty(index: number) {
        console.log('delete property with index: ' + index);
        let property = this.properties[index];
        this.removeProperty(property)
            .subscribe(value => {
                console.log('Property removed'); 

                this.properties.splice(index, 1);
                this.propertiesChanged.next(this.properties.slice());
            });
    }

    loadNamespaces() {
        console.log('PropertyService load all namespaces...');
        this.readAllNamespaces()
            .subscribe(namespaces => {
                console.log('Nr of read namespaces: ' + namespaces.length);
                this.setNamespaces(namespaces);
            });
    }

    private setNamespaces(namespaces: Namespace[]) {
        this.namespaces = namespaces;
        this.namespacesChanged.next(this.namespaces.slice());
    }

    getNamespaces() : Namespace[] {
        // slice returns a new array which is an exact copy.
        return this.namespaces.slice();
    }

    getNamespace(id: number) : Namespace {
        return this.namespaces[id];
    }

    addNamespace(namespace: Namespace) {
        console.log('add new namespace: ' + namespace.name);
        this.storeNewNamespace(namespace)
            .subscribe(namespace => {
                console.log('Namespace added: ' + namespace.name + ', id: ' + namespace.id);

                this.namespaces.push(namespace);
                this.namespacesChanged.next(this.namespaces.slice());
            });
    }

    updateNamespace(index: number, namespace: Namespace) {
        console.log('update namespace with id: ' + namespace.id);    
        this.storeNamespace(namespace)
            .subscribe(updatedNamespace => {
                console.log('Namespace with id ' + updatedNamespace.id + ' updated. Name: ' + updatedNamespace.name);

                this.namespaces[index] = updatedNamespace;
                this.namespacesChanged.next(this.namespaces.slice());
            });
    }

    deleteNamespace(index: number) {
        console.log('delete namespace with index: ' + index);
        let namespace = this.namespaces[index];
        this.removeNamespace(namespace)
            .subscribe(value => {
                console.log('Namespace removed'); 

                this.namespaces.splice(index, 1);
                this.namespacesChanged.next(this.namespaces.slice());
            });
    }

    // ***** Http functions *****

    url = 'http://localhost:3000/properties';
    urlNamespaces = 'http://localhost:3000/namespaces';

    private readAllProperties() : Observable<Property[]>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.url, options)
            .pipe(map(res => res.json()))
    }

    private storeNewProperty(property: Property): Observable<Property> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, property, options)
            .pipe(map(this.extractData));
    }

    private storeProperty(property: Property) : Observable<Property> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.url + '/' + property.id, property, options)
            .pipe(map(this.extractData));
    }

    private removeProperty(property: Property) : Observable<Property> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.url + '/' + property.id, options)
            .pipe(map(this.extractData));
    }

    private readAllNamespaces() : Observable<Namespace[]>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.urlNamespaces, options)
            .pipe(map(res => res.json()))
    }

    private storeNewNamespace(namespace: Namespace): Observable<Namespace> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.urlNamespaces, namespace, options)
            .pipe(map(this.extractData));
    }

    private storeNamespace(namespace: Namespace): Observable<Namespace> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.urlNamespaces + '/' + namespace.id, namespace, options)
            .pipe(map(this.extractData));
    }

    private removeNamespace(namespace: Namespace) : Observable<Namespace> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.urlNamespaces + '/' + namespace.id, options)
            .pipe(map(this.extractData));
    }

    private extractData(res: Response) {
        let body = res.json();
            return body || {};
    }
}