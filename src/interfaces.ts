import { Category } from './enums';

interface DamageLogger {
    (reason: srting): void;
}

interface Person {
    name: string;
    email: string;
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamage: (reason: srting) => void;
    // markDamage? (reason: srting): void;
    markDamage?: DamageLogger;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (customer: string, booktitle: string) => void;
}


interface A {
    [prop: string]: string | number;
}

interface TOptions {
    duration?: number;
    speed?: number;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

export { Author, Magazine,ShelfItem, Book, Librarian, Person, TOptions, A, DamageLogger as Logger};