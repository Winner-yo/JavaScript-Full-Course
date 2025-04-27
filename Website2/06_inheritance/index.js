//inheritance = allows a new class to inherit properties and methods
//              from an existing class (parent -> child)
//              helps with code reusability

class Animal{
    alive = true; //properties

    eat() {
        console.log(`This ${this.name} is eating`) //method
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`)
    }
}

class Rabbit extends Animal{
    name = "Rabbit"
    sound() {
        console.log(`${this.name} can boom`)
    }
    dig() {
        console.log(`${this.name} can dig`)
    }
}
class Cat extends Animal{
    name = "Cat"
    sound() {
        console.log(`${this.name} can meow`)
    }
    fart() {
        console.log(`${this.name} can fart`)
    }

}
class Dog extends Animal {
    name = "Dog";
    sound() {
        console.log(`${this.name} can bark`);
    }
    run() {
        console.log(`${this.name} can run`)
    }
}

const rabbit = new Rabbit()
const cat = new Cat()
const dog = new Dog()

rabbit.alive = false;
//console.log(rabbit.alive)

rabbit.eat()
rabbit.sleep()
console.log(rabbit.alive)
cat.eat()
dog.eat()
console.log(dog.alive)

rabbit.sound()
cat.sound()
dog.sound()