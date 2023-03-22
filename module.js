import { increment, decrement, getCount } from './libs/counter.mjs';

increment();
console.log(getCount()); // Output: 1

increment();
console.log(getCount()); // Output: 2

decrement();
console.log(getCount()); // Output: 1
