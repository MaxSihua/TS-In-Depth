import { ReferenceItem, UL, RefBook, Shelf } from './classes';
import { Category } from './enums';
import { getObjectProperty ,purge, printRefBook, calcTotalPages, getAllBooks, getBookAuthorByIndex, getBookTitlesByCategory, logBookTitles, logFirstAvailable, setDefaultConfig} from './functions';
import { Librarian, Logger, TOptions, Magazine } from './interfaces';
import { Library } from './classes/library';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ========================================================




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
// const logDamage: Logger = (reason: srting) => console.log(`Demaged: ${reason}`);
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
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();
// console.log(refBook);
// console.log(refBook.getID());
// refBook.printCitation();

// Task 05.04
// const favorirLibrarian: Librarian = new UL.UniversityLibrarian();
// favorirLibrarian.name = 'Anna';
// favorirLibrarian.assistCustomer('Boris', 'Learn TypeSctipt');
// favorirLibrarian.a = 2;

// Task 05.05
// const personBook: PersonBook = {
//     name: 'Anna',
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'annaexample.com',
//     id: 1,
//     title: 'Unknown'
// };

// const options: TOptions = { duration:20 };
// const options2 = setDefaultConfig(options);
// console.log(options);
// console.log(options2);
// console.log(Object.is(options, options2));

// Task 06.03, 06.04
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// printRefBook(refBook);

// const favorirLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favorirLibrarian);

// Task 06.05
const flag = true;

// if(flag) {
//     import('./classes')
//         .then(o => {
//             const reader = new o.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[0]);

//             console.log(reader);
//         })
//         .catch(err => consol.log('err'))
//         .finally(() => console.log('Completel'));
// }

// if(flag) {
//     const o = await import('./classes');

//     const reader = new o.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[0]);

//     console.log(reader);
// }

// Task 06.06
// let libraty: Library = new Library();
// let libraty: Library = {
//     id: 1,
//     address: '',
//     name: 'Anna'
// };

// Task 07.01
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// const result1 = purge(inventory);
// console.log(result);
// const result2 = purge(1, 2, 3);
// console.log(result2);

// Task 07.02, 07.03
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// // console.log(magazineShelf.getFirst().title);

// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

console.log(getObjectProperty(magazines[0], 'title'));
console.log(getObjectProperty<Book, 'author' | 'title'>(inventory[1], 'author'));