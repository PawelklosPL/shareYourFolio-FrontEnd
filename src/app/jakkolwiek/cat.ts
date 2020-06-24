import { Pet } from './pet';
import { Alien } from './alien';

export class Cat extends Pet {
    eatShitDuda() {
        console.log('Cat');
    }
    private humanYears: number;
    get catYears(): number {
        return this.humanYears * 5;
    }
    set catYears(catYears: number) {
        this.humanYears = catYears / 5;
    }
    public name: string;
    jebaćDudę(): void {
    }
}