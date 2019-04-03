import { Property } from "./propery.model";

export class Namespace {
    public id: string;
    public name: string;
    public description: string;

    // Properties of this namespace
    public properties: Property[];
    
    constructor(id: string, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}