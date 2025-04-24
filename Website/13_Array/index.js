//Array = variable like structure that hold more than 1 value
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]);//accessing individual element

fruits[1] = 'coconut'//changing the value
fruits[3] = 'mango'//adding element since last index is 2
fruits.push('pinapple')//adding to the end
fruits.unshift("lomen")//adding to the beginning of an array
fruits.shift()//removing from beginning
fruits.pop()//this will remove the last element
console.log(fruits.indexOf('mango'))
console.log(fruits.indexOf('potato'))//if not exist in the array it will return -1
let numOfFruits = fruits.length;
console.log(numOfFruits)
console.log(fruits)
//console.log(fruits[-5])
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
for (let i = fruits.length-1; i >= 0; i--){  //this will reverse the value
    console.log(fruits[i]);
}
fruits.sort()//sorting ascending order
fruits.sort().reverse()//reversing order
for (let fruit of fruits){  //shortcut for above
    console.log(fruit)
}
