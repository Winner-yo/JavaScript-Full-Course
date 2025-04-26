//function declaration = define reusable block of code for specific task

// function hello() {
//     console.log('hello')
// }

//function expression =  a way to define function as variable or values

const hello = function () {
    console.log('Hello');
}

//hello()
//below we passed entier function as a value
setTimeout(hello, 3000);  // log to the console after 3 second

setTimeout(function () {  // we passed entier function as an argument
    console.log('Ashe')
}, 4000)

//example 2

let numbers = [1, 2, 3, 4];
let squared = numbers.map(function (element) {
  return element ** 2;
});

console.log(squared);

// function  square(element) {
//     return element**2
// }