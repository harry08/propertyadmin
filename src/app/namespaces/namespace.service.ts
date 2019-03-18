import { Injectable, EventEmitter } from "@angular/core";
import { Namespace } from "./namespace.model";
import { Subject } from "rxjs";

@Injectable()
export class NamespaceService {

    namespacesChanged = new Subject();
    
    private namespaces : Namespace[] = [
        new Namespace("Common", "Common namespace"),
        new Namespace("Project 1", "Namespace for project 1"),
        new Namespace("Project X", "Namespace for project X")
    ];

    constructor() {

    }

    getNamespaces() : Namespace[] {
        // slice returns a new array which is an exact copy.
        return this.namespaces.slice();
    }

    setNamespaces(namespaces: Namespace[]) {
        this.namespaces = namespaces;
        this.namespacesChanged.next(this.namespaces.slice());
    }

    getNamespace(id: number) : Namespace {
        return this.namespaces[id];
    }

    addNamespace(namespace: Namespace) {
        this.namespaces.push(namespace);
        this.namespacesChanged.next(this.namespaces.slice());
    }

    updateNamespace(index: number, newNamespace: Namespace) {
        this.namespaces[index] = newNamespace;
        this.namespacesChanged.next(this.namespaces.slice());
    }

    deleteNamespace(index: number) {
        this.namespaces.splice(index, 1);
        this.namespacesChanged.next(this.namespaces.slice());
    }
}