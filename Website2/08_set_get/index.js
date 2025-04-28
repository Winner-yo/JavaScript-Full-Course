//getter = special method that makes a property readable
//setter = special method that makes a property writeable

//validate and modify a value when reading/writing a property
// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.error("Width must be positive Integer");
//     }
//     }
//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.error("Height must be positive Integer");
//     }
//     }

//     get width() {
//         return `Width is equal to ${this._width.toFixed(1)}cm`
//     }
//     get height() {
//         return `Width is equal to ${this._height.toFixed(1)}cm`;
//     }
//     get area() {
//         return `Area of rectangle is equal to ${this._height*this._width}cm^2`
//     }
// }

// const rectangle = new Rectangle(10, 8);
// //rectangle.width = 3;
// //rectangle.height = 9;

// console.log(rectangle.width)
// console.log(rectangle.height)
// console.log(rectangle.area)

//example 2
class Person{
  constructor(firstName,lastName,age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }


  set firstName(newFirstName) {
    if (typeof newFirstName === 'string' && newFirstName.length > 0) {
      this._firstName = newFirstName;
    }
    else {
      console.error('first name must be non-empty string');
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === 'string' && newLastName.length > 0) {
      this._lastName = newLastName;
    }
    else {
      console.error('last name must be non-empty string');
    }
  }
  set age(newAge) {
    if (typeof newAge === 'number' && newAge > 0) {
      this._age = newAge;
    }
    else {
      console.error('Age must be non-negative Integer ')
    }
  }

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get age() {
    return this._age;
  }
  get fullName() {
    return `${this._firstName} ${this._lastName}`
  }

}

const person1 = new Person('ashe','damena', 9);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age)
console.log(person1.fullName)