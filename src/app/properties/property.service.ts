import { Injectable, EventEmitter } from "@angular/core";
import { Property } from "./propery.model";

@Injectable()
export class PropertyService {

    propertySelected = new EventEmitter<Property>();
    
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
}