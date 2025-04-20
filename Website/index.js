//document.getElementById('h2').textContent = `your age is ${98}`
//document.getElementById('h3').innerHTML = 'move'
let value1 = 3;
const value2 = 0.9
var value3 = 'string'
value1 **= 2
value1--
console.log(typeof value3);
console.log(`price is ${value2}$`)
//how to accept user input 2 method

// let username = window.prompt("what's your username");
// console.log(`username is ${username}`);

let username;
document.getElementById('submit').onclick = function(){
    username = document.getElementById('mysub').value;
    document.getElementById("h2").textContent = `username is ${username}`;
    //console.log(`username is ${username}`)
};