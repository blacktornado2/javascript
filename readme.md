References:
Quick reference: https://www.w3schools.com/js/default.asp
Namaste JS reference: https://namaste-javascript-handbook.vercel.app/docs/lecture-1
Interview Questions reference: https://www.geeksforgeeks.org/javascript/javascript-interview-questions/
Wesbos REF: https://wesbos.com/javascript


- JavaScript is a synchronous single-threaded language
- JS is a loosely typed/weakly typed language, It doesn't assign datatype to any variable, we can change data type at runtime
- JavaScript -> Everything happens inside a execution context
- Execution Context = Memory component(Variable Environment) + Code component(Thread of Execution)
- Memory Component = variables and functions are stored as key-value pairs
- Code Component = where Code run line by line

How a program runs in JS
 1. Global Execution Context made
 2. Memory Creation Phase: variables are assigned undefined and function(made using function keyword without assing them to a variable) are stored in memory as it is
 3. Code Execution Phase

Function Call stack works as expected: Call stack maintains the order of execution of execution contexts
Call Stack synonyms:
 - Execution Context Stack
 - Program Stack
 - Control Stack
 - Runtime Stack
 - Machine Stack

Hoisting in JS
 - Hoisting is a concept in JavaScript that allows variables and function declarations to be accessed before they are actually defined in the code
 - Variable declarations are scanned and are made undefined
 - Function declarations are scanned and are made available


Global Object
 - In the browser, global object is window
 - In Node.js, global object is global

A function searches for a variable, first in its own local context, then outside it

 - undefined acts as a placeholder or default value in memory until a variable is assigned a different value.
 - undefined means that memory has been allocated to a variable but no value has been assigned yet.
 - not defined refers to a variable that has not been declared or allocated any memory

Scope = Accessibility of variable and functions which we can access from a particular place in code
Lexical Environment = local memory + lexical env of its parent.
The process of going one by one to parent and checking for values is called scope chain or Lexcial environment chain

Functions:


TODO:
-> How to use debugger in Chrome? How does a script run