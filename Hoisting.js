console.log(getName);  // [Function: getName]
console.log(num); // undefined
console.log(getName()); // Ankit

var num = 7;

console.log(num); // 7
// console.log(variableNotPresent); // ReferenceError: variableNotPresent is not defined

function getName() {
    return "Ankit";
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------


getId(); // TypeError: getId is not a function, now getId is acting like a variable, irrespective of whether is is arrow or not, or it defined usign let, const or var

var getId = function () {
    return 1;
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------


getId(); // ReferenceError: Cannot access 'getId' before initialization

let getId = function () {
    return 1;
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------


// console.log(y); // ReferenceError: Cannot access 'y' before initialization; let and const declarations are not hoisted like var
let y = 10;


// --------------------------------------------------------------------------------------------------------------------------------------------------------


var num1 = 1;
function fun2() {
    num1 = 10;
    // num1(); // TypeError: num1 is not a function, because num1 is now a number, not a function
    function num1() {
        console.log("Hi, I am num1 function");
    }
    console.log(num1); // 10, num1 is now a number
}
fun2();
console.log(num1);  // 1


// --------------------------------------------------------------------------------------------------------------------------------------------------------


var name = "Global";

(function () {
    console.log(name);  // won't look for name in the global, as name is defined later in the same scope
    var name = "Local";
    console.log(name);
})();


// --------------------------------------------------------------------------------------------------------------------------------------------------------

console.log(typeof myFunc);

function myFunc() {
    return "hello";
}

var myFunc = "world";

console.log(typeof myFunc);


// --------------------------------------------------------------------------------------------------------------------------------------------------------


let myLet = 'A';
if (true) {
    console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
    let myLet = 'B';
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------


new MyClass();

class MyClass {
    constructor() {
        console.log("Class instantiated"); // ReferenceError: Cannot access 'MyClass' before initialization
    }
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------


/*
Conceptual Questions:
What is hoisting in JavaScript?
 - Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope (either global or function scope) by the JavaScript engine before the code is executed.
 - It's important to understand that it's a conceptual model; the engine doesn't physically move the code.
 - Instead, during a compilation phase, it scans for all declarations, sets up memory for them, and then executes the code.


Explain the difference between variable hoisting and function hoisting.
 - Function Hoisting: For a function declaration (function myFunction() {}), the entire function, including its body, is hoisted. This means you can call the function successfully before its physical location in the code.
 - Variable Hoisting: For a variable declared with var (var myVar;), only the declaration is hoisted, not the initialization. The variable is automatically initialized with undefined. You can access the variable before its declaration without an error, but its value will be undefined.

 - Are declarations or initializations hoisted? Explain with an example.
 - How does hoisting work with var? What is the initial value of a hoisted var variable?
 - How do let and const handle hoisting?
 - What is the Temporal Dead Zone (TDZ)? Which keywords are affected by it?
 - Why does accessing a let or const variable before its declaration throw a ReferenceError, while a var variable returns undefined?
 - What's the difference in hoisting between a function declaration and a function expression?
 - Are arrow functions hoisted? Explain their behavior.
 - Are JavaScript classes hoisted? Explain the behavior when trying to access a class before its declaration.
 - How does hoisting behave within a function's scope versus the global scope?
 - Can you declare the same variable multiple times with var? What about with let and const? How does this relate to hoisting?
 - What is the order of precedence when a variable and a function are declared with the same name in the same scope?
 - How can you write cleaner code and avoid common issues related to hoisting?
 - Explain how the JavaScript engine handles hoisting during the compilation phase.
 - What happens if you use a variable declared with var inside a block (e.g., an if statement)? Is it block-scoped?
 - Does "use strict"; mode affect hoisting?
 - What would be the output of console.log(typeof undeclaredVar)? How is this different from a hoisted var?
 - How does hoisting work with default function parameters?
 - Why was the concept of hoisting introduced in JavaScript in the first place?
*/