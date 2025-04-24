//rest parameter = (...rest) allow a function work with a
//                 variable number of arguments by building them into array

                    //spread =expands an array into seperate elements 
                    // rest = bundles seperate elements into an array
function openFridge(...foods) {
    console.log(foods)
    //console.log(...foods); //spread
}                   
let food1 = 'burger';
let food2 = 'hotSheep';
let food3 = 'injera';
let food4 = 'doroWot'
openFridge(food1,food2,food3,food4)

function sum(...numbers) {
    let result = 0;
    for (num of numbers) {
        result += num;
    }
    let average = result / numbers.length;
    return [result, average];
}
let total = sum(1, 2, 3, 4, 5,6)
console.log(`your total is: ${total[0]} with average of: ${total[1]} `)

function combineStrings(...name) { 
    return name.join(' ')
}
let fullName = combineStrings('Mr.', 'Ashenafi', 'Damena','II');
console.log(fullName)

