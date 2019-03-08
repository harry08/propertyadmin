import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { PropertyService } from "../properties/property.service";
import { Property } from "../properties/propery.model";
import { AuthService } from "../auth/auth.service";

/**
 * Stores data in the firebase database ng-propertyadmin
 * Link to firebase console:
 * https://console.firebase.google.com/project/ng-propertyadmin/database/ng-propertyadmin/data
 */
@Injectable()
export class DataStorageService {

    constructor(
        private http: Http, 
        private propertyService: PropertyService,
        private authService: AuthService) {}

    storeProperties() {
        const token = this.authService.getToken();
        
        return this.http.put('https://ng-propertyadmin.firebaseio.com/properties.json?auth=' + token, this.propertyService.getProperties());
    }

    getProperties() {
        const token = this.authService.getToken();

        this.http.get('https://ng-propertyadmin.firebaseio.com/properties.json?auth=' + token)
            .subscribe(
                (response: Response) => {
                    let properties = new Array<Property>();
                    const readProperties: Property[] = response.json();
                    
                    for (let readProperty of readProperties) {
                        if (readProperty && readProperty.name) {
                            const property = new Property(
                                readProperty.name, 
                                readProperty.description, 
                                readProperty.value
                            );
                            properties.push(property);
                        } 
                    }
                    
                    this.propertyService.setProperties(properties);
                  }   
            );
    }
}