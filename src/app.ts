/* eslint-disable no-underscore-dangle */
/* eslint-disable no-redeclare */

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

enum Category { JavaScript, CSS, HTML, TypeScript, Angular }

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
//     pages?: number;
//     // markDamage: (reason: srting) => void;
//     // markDamage? (reason: srting): void;
//     markDamage?: DamageLogger;
// };

type BookPropertis = keyof Book;

interface DamageLogger {
    (reason: srting): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (customer: string, booktitle: string) => void;
}


// interface A {
//     [prop: string]: string | number;
// }

function getAllBooks(): readonly Book[] {
    const books =<const> [
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true },
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: false },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true },
    ];

    return books;
}

function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`Number of books: ${books.length}`);

    const title = books.find(({available}) => available)?.title;
    console.log(`First availble book: ${title}`);
}

function getBookTitlesByCategory(inputCategory: Category = Category.JavaScript): string[] {
    const books = getAllBooks();

    return books
        .filter(book => book.category === inputCategory)
        .map(({title}) => title);
}

function logBookTitles(titles: Array<string>): void {
    titles.forEach(title => console.log(title));
}

function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();

    const { title, author } = books[index];
    return [title, author];
}

function calcTotalPages(): void {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    const r = data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);

    console.log(r);
}

function times(array: number[], times: number = 2): number[] | never {
    if (typeof array === 'number' && typeof times === 'number') {
        return Array.from({ length: times }, () => array).flat();
    } else {
        throw new Error('Not implemented');
    }
}

times([1,2,3]);

function everyNth(arr: number[], nth: number = 1): number[] {
    return arr.filter((e, i, a) => {
        const test = (i + 1) % nth === 0 ;
        return test;
    });
    throw new Error('Not implemented');
}

// TASK 3

function createCusttomerID (name: string, id: number): string {
    return `${id}/${name}`;
}

function createCusttomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer ages ${age}`);
    }

    if(city) {
        console.log(`Customer city ${city}`);
    }
}

function getBooksByID(id: number): Book {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

function checkoutBooks(customer: string, ...bookIDs: number[]): string[]{
    console.log(`Customer name ${customer}`);

    bookIDs
        .map(id => getBooksByID(id))
        .filter(book => book.available)
        .map(book => book.title);
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: [string | boolean] | [ number, boolean]): string[] {
    const books = getAllBooks();

    if(args.length === 1) {
        const [arg] = args;

        if(typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book =>book.id === id && book.available === available).map(book => book.title);
        }
    }
}

function assertStringValue(data: any): void {
    if (typeof data !== 'string') {
        throw new Error('valye should have been a srting');
    }
}

function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return[...title].reverse().join('');
}

function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

function getPropery(book: Book, prop: BookPropertis): any {
    const valye = book[prop];

    return typeof valye === 'function' ? valye.name : valye;
}

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

class Encyclopedia extends ReferenceItem {
    constructor(
        id: number,
        public title: string,
        private yesr: number,
        public edition: number
    ) {
        super(id, title, year);
    }

    override printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

// interface A {
//     a: number;
// }

class UniversityLibrarian implements Librarian /* A */ {
    name: string;
    email: string;
    department: string;

    // a: number = 1;

    assistCustomer (customer: string, booktitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${booktitle}`);
    }

}



// ========================================================
// Task 02.01
// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.CSS));
// console.log(getBookAuthorByIndex(0));
// calcTotalPages();

// Tsck 03.01
// const myID: string = createCusttomerID('Ann',10);
// console.log(myID);

// let IDGenerator: (name: string, id: number) => string;
// let IDGenerator: typeof createCusttomerID;
// IDGenerator = (name: string, id: number) => `${id}/${name}`;
// IDGenerator = createCusttomerID;

// const a = typeof createCusttomerID;
// console.log(IDGenerator('Boris', 20));

// Task 03.02
// createCusttomer('Anna');
// createCusttomer('Anna', 20);
// createCusttomer('Anna', 20, 'Kyev');

// console.log(getBookTitlesByCategory());
// console.log(getBookTitlesByCategory(Category.CSS));

// logFirstAvailable();

// console.log(getBooksByID(1));

// console.log(checkoutBooks('NoName Customer', ...[1, 3, 4]));

// Task 03.03
// console.log(getTitles(1, true));
// console.log(getTitles(true));
// console.log(getTitles(false));
// console.log(getTitles(2, false));
// console.log(getTitles('Lea Verou'));

// Task 03.04
// console.log(bookTitleTransform('Learn TypeScript'));
// console.log(bookTitleTransform(123));
// console.log(bookTitleTransform());

// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Becgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3,
//     pages: 200,
//     // markDamage: (reason: srting) => console.log(`Demaged: ${reason}`)
//     markDamage(reason: srting) {
//         console.log(`Demaged: ${reason}`);
//     }
// };
// printBook(myBook);
// myBook.markDamage('missing bakc cover');

// Task 04.02
// const logDamage: DamageLogger = (reason: srting) => console.log(`Demaged: ${reason}`);
// logDamage('missing bakc cover');

// Task 04.03
// const favorirAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     numBooksPublished:2
// };

// const favoriteLibrarian: Librarian = {
//     nane: 'Boris',
//     email: 'boris@example.com',
//     department: 'Classical Librature',
//     assertStringValue: null
// };

// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// consol.log(offer.magazinne);
// consol.log(offer.magazinne?.getTitles());
// consol.log(offer.book.getTitles?.());
// consol.log(offer.book.author?.[10]);

// Task 04.05
// console.log(getPropery(myBook, 'title'));
// console.log(getPropery(myBook, 'markDamaged'));
// console.log(getPropery(myBook, 'isbn'));

// Task 05.01
// const ref = new ReferenceItem(1, 'Learn TypeScript', 2022);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc group';
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.02 05.03
// const refBook: Encyclopedia = new Encyclopedia(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();
// console.log(refBook);
// console.log(refBook.getID());
// refBook.printCitation();

// Task 05.04
const favorirLibrarian: Librarian = new UniversityLibrarian();
favorirLibrarian.name = 'Anna';
favorirLibrarian.assistCustomer('Boris', 'Learn TypeSctipt');
// favorirLibrarian.a = 2;
