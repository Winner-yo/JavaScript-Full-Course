//spread operator = ... allows an iterable such as an array or string to be
//     expanded into seperate elements(unpacks the elements)

let numbers = [1, 2, 3, 4, 5];
//let maximum = Math.max(numbers)//value is NaN
let maximum = Math.max(...numbers)//this will unpack the elements
console.log(maximum)
let letters = 'ABCDEFGH'
//let seperatedLetter = [...letters];
let joinedLetter = [...letters].join('');
let joinedLetterByDash = [...letters].join('-');
console.log(joinedLetter)
console.log(joinedLetterByDash);

let fruits = ['mango', 'banana'];
let vegitable = ['carrot', 'cabbage'];
let foods = [...fruits, ...vegitable, "egg", "milk"];//combining different array
console.log(foods)