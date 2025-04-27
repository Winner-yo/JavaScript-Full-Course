//class = (ES6 feature) provides a more structured and cleaner way to work with objects
//         compare to traditional constructor functions
//         ex. static, keyword, encapsulation, inheritance

//inside class we don't need to use function 
// key word to write function just name of the function

class Products{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayProduct() {
        console.log(`Product : $${this.name}`)
        console.log(`price : $${this.price.toFixed(2)}`)
    }
    totalPrice(salesTax) {
        return this.price + (this.price*salesTax)
    }
}
const salesTax = 0.03;

const product1 = new Products('Mango', 12.99);
const product2 = new Products('t-shirt', 2.9);
const product3 = new Products('shoes', 120.2);
product1.displayProduct()
product2.displayProduct()

const total = product1.totalPrice(salesTax);
console.log(`Total price (with Tax): $${total.toFixed(2)}`);