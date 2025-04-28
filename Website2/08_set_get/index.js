//getter = special method that makes a property readable
//setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("Width must be positive Integer");
    }
    }
  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("Height must be positive Integer");
    }
    }

    get width() {
        return `Width is equal to ${this._width.toFixed(1)}cm`
    }
    get height() {
        return `Width is equal to ${this._height.toFixed(1)}cm`;
    }
    get area() {
        return `Area of rectangle is equal to ${this._height*this._width}cm^2`
    }
}

const rectangle = new Rectangle(10, 8);
//rectangle.width = 3;
//rectangle.height = 9;

console.log(rectangle.width)
console.log(rectangle.height)
console.log(rectangle.area)

//example 2


