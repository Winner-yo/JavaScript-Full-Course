//conditional statement
// let age = 23;


//example 1
// if (age > 18) {
//     console.log("you can vote")
// } else {
//     console.log("you can't vote")
// }


//example 2
// let isStudent = false;
// if (isStudent) {
//     console.log('you are student')
// } else {
//     console.log("you're not student")
// }
/*

//nested if else
let haveLicense = false;
if (age > 18) {
    console.log("you are old enough to drive ")
    if (haveLicense) {
        console.log("you have a license")
    }
    else if (age < 0) {
        console.log("invalid age");
    }
    else if (age===0) {
        console.log("age can't be zero");
    }
    else {
        console.log("you don't have license")
    }
} else {
    console.log('you are under age')
}
*/
//example for practice

let findResult = document.querySelector(".findResult");
let Answer = document.getElementById("Answer");
let enterValue = document.getElementById("ages");

findResult.onclick = () => {
    let ages = enterValue.value;
    ages = Number(ages);
        
    if (ages > 100) {
    Answer.textContent = "you are old";
    } else if (ages >= 18) {
    Answer.textContent = "you can drive";
    } else if (ages < 0) {
    Answer.textContent = "Invalid age";
    } else if (ages == 0) {
    Answer.textContent = "You just born ";
    } else {
    Answer.textContent = "You must be 18+";
    }   
  };
