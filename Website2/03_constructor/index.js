//constructor = special method for defining
//              the properties and methods of objects

function Car(a, model, color, year) {
    this.make = a
    this.model = model
    this.color = color
    this.year = year
    this.drive=function(){console.log(`You drive ${this.model}`)}
}

const car1 = new Car('Ethiopia', 'toyota', 'black', 2010);
const car2 = new Car('America', 'suzuki', 'white', 2019);
const car3 = new Car('Africa', 'corola', 'blue', 2022);
const car4 = new Car('Sudan', 'shavo', 'black-white', 2019);
console.log(car1.model)
console.log(car2.model)
console.log(car3.model)
console.log(car4.model)
car1.drive()
car3.drive()