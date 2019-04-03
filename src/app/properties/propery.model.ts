export class Property {
    public id: string;
    public name: string;
    public description: string;
    public value: string;

    // Reference to namespace. A property belongs always to a namespace
    public namespaceId: string;

    constructor(id: string, name: string, description: string, value: string, namespaceId: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.value = value;
        this.namespaceId = namespaceId;
    }
}