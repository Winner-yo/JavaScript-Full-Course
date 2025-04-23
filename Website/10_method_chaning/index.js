//method chaning = calling one method after another in one line of code

let username = window.prompt("Enter Your username");
//no method chaning

username = username.trim();
let firstChar = username.charAt(0)
firstChar = firstChar.toUpperCase()
extrChar=username.slice(1)
extrChar = extrChar.toLowerCase()
username = firstChar + extrChar;
console.log(username)

// method chaning

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()
console.log(username)