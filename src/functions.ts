/* eslint-disable no-redeclare */

import { Category } from './enums';
import { Book } from './interfaces';
import { BookOrUndefined, BookPropertis } from './types';

export function getAllBooks(): readonly Book[] {
    const books =<const> [
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true },
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: false },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true },
    ];

    return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`Number of books: ${books.length}`);

    const title = books.find(({available}) => available)?.title;
    console.log(`First availble book: ${title}`);
}

export function getBookTitlesByCategory(inputCategory: Category = Category.JavaScript): string[] {
    const books = getAllBooks();

    return books
        .filter(book => book.category === inputCategory)
        .map(({title}) => title);
}

export function logBookTitles(titles: Array<string>): void {
    titles.forEach(title => console.log(title));
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();

    const { title, author } = books[index];
    return [title, author];
}

export function calcTotalPages(): void {
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

export function times(array: number[], times: number = 2): number[] | never {
    if (typeof array === 'number' && typeof times === 'number') {
        return Array.from({ length: times }, () => array).flat();
    } else {
        throw new Error('Not implemented');
    }
}

times([1,2,3]);

export function everyNth(arr: number[], nth: number = 1): number[] {
    return arr.filter((e, i, a) => {
        const test = (i + 1) % nth === 0 ;
        return test;
    });
    throw new Error('Not implemented');
}

export function createCusttomerID (name: string, id: number): string {
    return `${id}/${name}`;
}

export function createCusttomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer ages ${age}`);
    }

    if(city) {
        console.log(`Customer city ${city}`);
    }
}

export function getBooksByID(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[]{
    console.log(`Customer name ${customer}`);

    bookIDs
        .map(id => getBooksByID(id))
        .filter(book => book.available)
        .map(book => book.title);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: [string | boolean] | [ number, boolean]): string[] {
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

export function assertStringValue(data: any): void {
    if (typeof data !== 'string') {
        throw new Error('valye should have been a srting');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return[...title].reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getPropery(book: Book, prop: BookPropertis): any {
    const valye = book[prop];

    return typeof valye === 'function' ? valye.name : valye;
}

export function setDefaultConfig(options: TOptions) {
    options.duration ??= 100;
    options.speed ??= 60;
//     return options;
}