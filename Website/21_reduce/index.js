//.reduce() = reduce the element of an array to single value

let prices = [3, 4, 53, 22, 555, 33, 90];
let sums = prices.reduce(sum);
console.log(sums)

function sum(previous, next) {
    return previous+next
}

//example 2
let grade = [90, 23, 44, 67, 87, 98, 68, 87];
let maximum = grade.reduce(getMaxgrade);
let minimum = grade.reduce(getMingrade)
console.log(maximum);
console.log(minimum);


function getMaxgrade(accumulator, next) {
    return Math.max(accumulator, next);
}
function getMingrade(accumulator, next) {
    return Math.min(accumulator, next);
}
// function getMaxgrade(accumulator, next) {
//     let max_is = accumulator;
//     if (max_is < next) {
//         max_is=next
//     }
//     return max_is;
// }