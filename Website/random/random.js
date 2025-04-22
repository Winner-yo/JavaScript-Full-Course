
/*
let value1 = Math.random()//generate random number between 0-1
console.log(value1)

let value2 = Math.random() * 6 //generate random number between 0-6 including decimal point
console.log(value2)

let value3 = Math.floor(Math.random() * 6) //without decimal point but 0-5
console.log(value3)

let value4 = Math.floor(Math.random() * 6)+1;// 0-6
console.log(value4)

let max = 100;
let min = 50;

let value5 = Math.floor(Math.random() * (max-min)) + min; // 50-100
console.log(value5);
*/
let max = 100;
let min = 50;
let mybutton = document.getElementById("random");
let randomValue = document.getElementById('randomValue');

mybutton.onclick = () => {
    let value = Math.floor(Math.random() * (max - min)) + min;
    randomValue.textContent = value;
};