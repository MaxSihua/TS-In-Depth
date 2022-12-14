/* eslint-disable no-underscore-dangle */
import * as Interfaces from './interfaces';

abstract class ReferenceItem {
    // title: srting;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    #id: number;

    private _publisher: srting;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    static department: string = 'Research Dep.';

    constructor(
        id: number,
        public title: string,
        protected yesr: number
    ) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    printItem(): void {
        console.log(`${this.title} was puplished in ${this.year}`);
        console.log(ReferenceItem.department);
        console.log(Object.getPrototypeOF(this).constructor.department);
    }

    getID(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}

// interface A {
//     a: number;
// }

class UniversityLibrarian implements Interfaces.Librarian /* A */ {
    name: string;
    email: string;
    department: string;

    // a: number = 1;

    assistCustomer (customer: string, booktitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${booktitle}`);
    }

}

export {UniversityLibrarian, ReferenceItem };