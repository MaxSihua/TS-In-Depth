import { sealed } from '../decorators';
import * as Interfaces from './../interfaces';
import { Librarian } from './../interfaces';

// interface A {
//     a: number;
// }

// @sealed('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Interfaces.Librarian /* A */ {
    name: string;
    email: string;
    department: string;

    // a: number = 1;

    @logParameter
    assistCustomer (@logParameter custName: string,@logParameter booktitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${booktitle}`);
    }
    // @writable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }
    // @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }

}

export {UniversityLibrarian };