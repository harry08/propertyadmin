import { Injectable, EventEmitter } from "@angular/core";
import { Namespace } from "./namespace.model";

@Injectable()
export class NamespaceService {

    propertySelected = new EventEmitter<Namespace>();
    
    private namespaces : Namespace[] = [
        new Namespace("Common", "Common namespace"),
        new Namespace("Project 1 ", "Namespace for project 1")
    ];

    constructor() {

    }

    getNamespaces() : Namespace[] {
        // slice returns a new array which is an exact copy.
        return this.namespaces.slice();
    }
}