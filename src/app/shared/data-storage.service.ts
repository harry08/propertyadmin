import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { PropertyService } from "../properties/property.service";
import { Property } from "../properties/propery.model";

/**
 * Stores data in a firebase database.
 */
@Injectable()
export class DataStorageService {

    constructor(private http: Http, private propertyService: PropertyService) {}

    storeProperties() {
        return this.http.put('https://ng-propertyadmin.firebaseio.com/properties.json', this.propertyService.getProperties());
    }

    getProperties() {
        this.http.get('https://ng-propertyadmin.firebaseio.com/properties.json')
            .subscribe(
                (response: Response) => {
                    const properties: Property[] = response.json();
                    this.propertyService.setProperties(properties);
                }
            );
    }
}