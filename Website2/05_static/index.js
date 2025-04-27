// static = keyword that defines properties or methods
//          that belongs to a class itself rather than the objects
//          created from that class (class owns anythig static , not the objects)

class MathUtil{
    static PI = 3.142242;

    static getDiameter(radius) {  // method
        return 2 * radius;
    }
    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }
    static getArea(radius) {
        return 2 * this.PI * radius * radius;
    }

}
console.log(MathUtil.PI)
console.log(MathUtil.getCircumference(10))
console.log(MathUtil.getArea(5))

// const math1 = new MathUtil(2);  //this is not work it's undefine
// console.log(math1.getCircumference)

//example -2

class User{
    static userCount = 0;
    constructor(username) {
        this.username = username;
        User.userCount++;
    }
    static getCount() {
        return `Total count of user is ${User.userCount}`
    }
    sayHello() {
        console.log(`Hi this's ${this.username}`)
    }
}

const user1 = new User('Ashe');
const user2 = new User('Boni');
const user3 = new User('Beki');

console.log(user1.username)
//console.log(User.userCount)
console.log(User.getCount())
user1.sayHello()