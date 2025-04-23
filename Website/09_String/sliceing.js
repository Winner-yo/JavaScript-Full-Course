//string slicing = creating substring from portion of string

let name = 'Ashenafi Damena';
// let firstname =name.slice(0,8)
// let lastname =name.slice(9,17)
// //let lastname =name.slice(11)
// let name_back=name.slice(-6)
// console.log(firstname);
// console.log(lastname);
// console.log(name_back);

let firstname = name.slice(0, name.indexOf(' '));
let lastname = name.slice(name.indexOf(' ')+1)//we make +1 to trim the space end is not important but we can put -1, name.length
console.log(lastname);

const email = 'ashe@gmail.com';
let username = email.slice(0, email.indexOf('@'))
console.log(username);

