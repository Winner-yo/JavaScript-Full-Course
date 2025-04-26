//objects = A collection of related properties and/or methods
//           Can represent real world objects (people,products,places)
//           Can represent  real world objects (people, products,place)
//           object  ={key:value,function()}

const person1 = {
    fname: 'Ashenafi',
    lname:'Damena',
    ID: 'UGR/25579/14',
    age:21,
    greet:function(name){ console.log(`Hi ${name}`); },
}
const person2 = {
    fname: 'Bereket',
    lname:'mattew',
    ID: 'UGR/25639/14',
    age:22,
    greet: (name) => { console.log(`Hi ${name}`); },
    eat: () => console.log('You can eat pizza and chicken'),
}

console.log(person1.fname)
person1.greet('Mattew')
person2.greet('Bereket')
person2.eat()