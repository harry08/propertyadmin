import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from 'rxjs';
import { Property } from "./propery.model";

@Injectable()
export class PropertyService {

    propertiesChanged = new Subject();

    private properties : Property[] = [
        new Property("username", "Name of the batch user", "k001234"),
        new Property("password", "Password for the batch user", "274hrz4"),
        new Property("outputpath", "Path to output folder", "./test/output"),
        new Property("inputfile", "Path to input file", "./test/test.csv")
    ];

    constructor() {

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
        this.properties.push(property);
        this.propertiesChanged.next(this.properties.slice());
    }

    updateProperty(index: number, newProperty: Property) {
        this.properties[index] = newProperty;
        this.propertiesChanged.next(this.properties.slice());
    }

    deleteProperty(index: number) {
        this.properties.splice(index, 1);
        this.propertiesChanged.next(this.properties.slice());
    }
}