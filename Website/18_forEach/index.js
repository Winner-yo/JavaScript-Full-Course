//forEach = method used to iterate over the element
//          of an array and apply a specified function (callback) to each element
//          array.forEach(callback)


//          element , index and array are provided

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(cube);
numbers.forEach(displayResult);


function double(element, index, array) {
    //array[index]=element*2
    array[index]=Math.pow(element,2)
}

function cube(element, index, array) {
    array[index] = Math.pow(element, 3);
}

function square(element,index,array) {
    array[index]=element**2
}
function displayResult(element) {
    console.log(element);
}

//example-2
let fruits = ['apple', 'orange', 'banana', 'pinapple']
//fruits.forEach(fruitsUpper);
fruits.forEach(Capitalize);
fruits.forEach(displayFruits)


function fruitsUpper(element, index, array) {
    array[index]=element.toUpperCase()
}
function Capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
function displayFruits(element) {
    console.log(element)
}