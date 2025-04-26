//.map()=accepts a callback and applies that function to each element of an array,
//        the return new array
// we always have the original numbers

//here we create new array and store it in a variable

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(square);
const cubed = numbers.map(cube);

console.log(squared); //this display new array
console.log(cubed);
//numbers.map(displayResult); //this always display the number it self

function square(element) {
    return Math.pow(element, 2);
}
function cube(element) {
    return Math.pow(element, 3);
}

function displayResult(element) {
    console.log(element)
}

//example - 2
let student = ['Ashenafi', "Bereket", 'Bekele', 'Anania'];
const studentName = student.map(upperCase);
const lowerCased = student.map(lowerCase);
console.log(studentName);
console.log(lowerCased)

function upperCase(element) {
    return element.toUpperCase();
}
function lowerCase(element) {
    return element.toLowerCase();
}

let dates = ['2024-4-6', '2025-4-12', '2026-7-9'];
const formattedDates = dates.map(format);
console.log(formattedDates);

function format(element) {
    const part = element.split('-');
    return `${part[1]}/${part[2]}/${part[0]}`
}