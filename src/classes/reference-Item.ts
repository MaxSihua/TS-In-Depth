/* eslint-disable no-underscore-dangle */

import { timeout } from '../decorators';

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

    @timeout(2000)
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


export { ReferenceItem };