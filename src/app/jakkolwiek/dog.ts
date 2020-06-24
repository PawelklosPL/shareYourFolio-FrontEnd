import { Pet } from './pet';

export class Dog implements Pet {
    eatShitDuda() {
        throw new Error("Method not implemented.");
    }
    public name: string;
    jebaćDudę(): void {
        throw new Error("Method not implemented.");
    }
    
}