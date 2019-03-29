import { Injectable, EventEmitter } from "@angular/core";
import { Subject, Observable } from 'rxjs';
import { Property } from "./propery.model";
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators";

/**
 * Offers CRUD functionalitsy for Properties.
 * DataStorage via Json-Server is done here.
 */
@Injectable()
export class PropertyService {

    propertiesChanged = new Subject();

    private properties : Property[] = [];

    constructor(private http: Http) {
        this.loadProperties();
    }

    loadProperties() {
        console.log('PropertyService load all properties...');
        this.readAllProperties()
            .subscribe(properties => {
                console.log('Nr of read properties: ' + properties.length);
                this.setProperties(properties);
            });
    }

    getProperties() : Property[] {
        // slice returns a new array which is an exact copy.
        return this.properties.slice();
    }

    setProperties(properties: Property[]) {
        this.properties = properties;
        this.propertiesChanged.next(this.properties.slice());
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

    // ***** Http functions *****

    url = 'http://localhost:3000/properties';

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

    private extractData(res: Response) {
        let body = res.json();
            return body || {};
    }
}