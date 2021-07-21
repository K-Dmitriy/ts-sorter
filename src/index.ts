import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([3, -4, 29, 5, 2, 11]);
const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(numbersCollection.data);
