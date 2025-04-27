//super = keyword is used in classes to call the constructor
//        or access the properties and methods of a parent (superclass)
//        this = this object
//        super = the parent

class Animal{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    move() {
        console.log(`This ${this.name} is run at speed of ${speed}`)
    }
}

class Rabbit extends Animal{
    constructor(name,age,runSpeed) {
        super(name,age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed) {
        super(name,age);
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed) {
        super(name,age);
        this.flySpeed = flySpeed;
    }
}

const rabbit =new Rabbit('rabbit',2,20)
const fish =new Fish('fish',5,32)
const hawk = new Hawk('hawk', 7, 12)

console.log(rabbit.name)
console.log(fish.age)