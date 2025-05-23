//super = keyword is used in classes to call the constructor
//        or access the properties and methods of a parent (superclass)
//        this = this object
//        super = the parent

class Animal{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    move(speed) {
        console.log(`This ${this.name} is run at speed of ${speed}mph`)
    }
}

class Rabbit extends Animal{
    constructor(name,age,runSpeed) {
        super(name,age);
        this.runSpeed = runSpeed;
    }
    run() {
        console.log(`This ${this.name} can run`)
        super.move(this.runSpeed)
    }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
  swim() {
      console.log(`This ${this.name} can swim`);
      super.move(this.swimSpeed)
  }
}

class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }
  fly() {
      console.log(`This ${this.name} can fly`);
      super.move(this.flySpeed)
  }
}

const rabbit =new Rabbit('rabbit',2,20)
const fish =new Fish('fish',5,32)
const hawk = new Hawk('hawk', 7, 12)

console.log(rabbit.name)
console.log(fish.age)
console.log(rabbit.runSpeed)
hawk.fly()
rabbit.run()