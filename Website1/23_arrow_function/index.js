// arrow function = it's concise way of wrting function expression
//(parameter) => some code

// function Hello(name) {
//     console.log(`Hello ${name}`)
// }
// Hello("Ashe");

const Hello = (name,age) => {
    console.log(`Hello ${name}`)
    console.log(`You are ${age} years old.`)
}
Hello("Ashe", 22)

setTimeout(() => {
    console.log('that\'s alright')
}, 2000);

let numbers = [1, 2, 3, 4, 5,6];
let square = numbers.map((element) =>  Math.pow(element, 2) )
let cube = numbers.map((element) => { return Math.pow(element, 3) })
console.log(square)
console.log(cube)

let oddNums = numbers.filter((element) => { return element % 2 !== 0 })
let evenNums = numbers.filter((element) => element % 2 === 0 )
console.log(oddNums)
console.log(evenNums)

let total = numbers.reduce((accumulator, element) => accumulator + element)
console.log(total)