export class Property {
    public id: string;
    public name: string;
    public description: string;
    public value: string;

    constructor(id: string, name: string, description: string, value: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.value = value;
    }
}