// this keyword will work differently in strict mode and non-strict mode
"use strict";

// 1. this in global space

// console.log(this); // Global object -> Window for browser, global for node

// 2. this inside a function

function fun() {
  // the value depends on strict/non-strict mode
  console.log(this); 
}

// the value of this inside function is undefined(strict mode)
// this inside non-strict mode - (this substitution)

// this substition
// If the value of this keyword is undefined or null,
// this keyword will be replaced with globalObject only in non-strict mode

// ** this keyword depends on how a function is called
// fun(); // undefined
// window.fun(); // window

// 3. this inside a object's method

const person1 = {
  name: "Ankit",
  printName: function (city) {
    console.log(this, "from: ", city);
  },
};

// person1.printName("GGN"); // person1

// 4. call, apply, bind (sharing methods)
// - bind()
const person2 = {
  name: "Utkarsh",
};

const sharedFun = person1.printName.bind(person2, "BLD");
// sharedFun(); // person2

// - call(): directly call function
// person1.printName.call(person2, "BLD"); // person2

// - apply(): call directyl but second arg is an array
// person1.printName.apply(person2, ["BLD"]);

// 5. this inside arrow function
// they don't have their this, they take this from their lexical parent

const person3 = {
  name: "Roshan",
  printName: () => {
    console.log(this);
  },
};

person3.printName(); // window

const person4 = {
  name: "Harshal",
  printName: function () {
    const fn = () => {
      console.log(this);
    };
    fn();
  },
};

person4.printName(); // person4

const person5 = {
  name: "Bhunesh",
  printName: () => {
    const fn = () => {
      console.log(this);
    };
    fn();
  },
};

person5.printName(); // window

// 6. this in DOM element
// The element itself is the value of this

// 7. this in class

// TODO: some good problems in this