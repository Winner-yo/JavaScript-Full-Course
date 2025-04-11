console.log('Working with module...')

import { sum, sub } from './calc.js'
console.log(sum(3, 5));
console.log(sub(7, 2));

//import { default as AsheName } from './deafult.js';
import AsheName from './deafult.js';
console.log(AsheName());