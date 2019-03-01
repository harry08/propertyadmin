import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { PropertyService } from "../properties/property.service";

/**
 * Stores data in a firebase database.
 */
@Injectable()
export class DataStorageService {

    constructor(private http: Http, private propertyService: PropertyService) {}

    storeProperties() {
        return this.http.put('https://ng-propertyadmin.firebaseio.com/properties.json', this.propertyService.getProperties());
    }
}