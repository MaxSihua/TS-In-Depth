import { Book } from './interfaces';

// export type Book = {
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

export type BookPropertis = keyof Book;
export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;