//.filter() = create new array by filtering out element

let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
let evenNums = numbers.filter(isEven); //this holds actual value
let oddNums = numbers.filter(isOdd);


let evenNum = numbers.map(isEven); //this will hold boolean value
//console.log(evenNum)  //this will return boolean value
console.log(evenNums);
console.log(oddNums);

function isEven(element) {
    return element % 2 === 0;
}
function isOdd(element) {
    return element % 2 !== 0;
}

//example 2

let age = [12, 45, 22, 10, 17, 35,18];
let adult = age.filter(isAdults);
let children = age.filter(isChilderen);

console.log(children);
console.log(adult);

// function isAdults(element) {
//     if (element >= 18) {
//         return element
//     }
// }

function isAdults(element) {
    return element >= 18;
}

function isChilderen(element) {
    return element < 18;
}

//example 3

let words = ['orange', 'mybestie', 'mango', 'banana', 'specialfood', 'pinapple',];
let shortWord = words.filter(getShortWord);
let longWord=words.filter(getLongWord)
console.log(shortWord);
console.log(longWord)


function getShortWord(element) {
    return element.length <= 6;
}
function getLongWord(element) {
    return element.length > 6;
}