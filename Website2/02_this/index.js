//this = reference to the object where THIS is used
//       (the object depends on the immediate context)
//        persone.name == this.name
//       it doesn't work with arrow function

const person1 = {
    fname: "Ashenafi",
    lname: "Damena",
    food:"Pizza",
    age: 22,
    greet: function () { console.log(`Hi ${this.fname}`) },
    eat:function(){console.log(`${this.fname} favorite food is ${this.food}`);}
    //greet: () => { console.log(`Hi ${person1.fname}`) },
}

person1.greet()