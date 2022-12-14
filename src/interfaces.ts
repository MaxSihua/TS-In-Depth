import { Category } from './enums';

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


interface A {
    [prop: string]: string | number;
}

interface TOptions {
    duration?: number;
    speed?: number;
}

export { Author, Book, Librarian, Person, TOptions, A, DamageLogger as Logger};