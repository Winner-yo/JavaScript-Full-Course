//destructuring = extract values from arrays and objects,
//                then assign them to variables in a convenient way
//                [] = to perform array destructuring
//                {} = to perform object destructuring

let a = 3;
let b = 4;

[a, b] = [b, a]

console.log(a)

//example 2
const colors = ['blue', 'green', 'black', 'white', 'red'];

[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

//example 3
//we can also use rest parameter to create new array
const [color1, color2, color3,...extraColors] = colors
console.log(color1);
console.log(extraColors);

//example 4 extract values from object
const person1 = {
    firstName: 'Ashenafi',
    lastName: 'Damena',
    age: 22,
    job:'shoeshine'
}
const person2 = {
    firstName: 'Bereket',
    lastName: 'Daba',
    age: 23,
}

const { firstName, lastName, age, job='unemployed' } = person2;
console.log(job);

//example 5
function displayPerson({firstName,lastName,age,job='unemployed'}) {
    console.log(`Name: ${firstName} ${lastName}`)
    console.log(`Age: ${age}`)
    console.log(`Job: ${job}`)
}

displayPerson(person2)