References: 
---
 - Quick reference: https://www.w3schools.com/js/default.asp <br/>
 - Namaste JS reference: https://namaste-javascript-handbook.vercel.app/docs/lecture-1 <br/>
 - Wesbos Reference: https://wesbos.com/javascript <br/>
 - JS Practice: https://namastedev.com/practice?search=&sortBy=default&language=js&difficulty_level=All&status=All&companies=All&tags=All&page=1 <br/>
 - 30 Exercises: https://javascript30.com/ <br/>
 - Interview Questions reference: https://www.geeksforgeeks.org/javascript/javascript-interview-questions/ <br/>
 - JS Interview Questions - 1: https://blog.webdevsimplified.com/2025-08/javascript-interview-questions/ <br/>
 - JS Interview Questions - 2: https://github.com/greatfrontend/top-javascript-interview-questions
 - Comprehensive blogs: https://javascript.info/ <br/>
---

Topics:
---
 - call, apply, bind: DONE
 - polyfill for bind method: DONE
 - function currying: DONE
 - Debouncing: DONE
 - Throttling: DONE
 - async vs. defer: DONE (https://dev.to/fidalmathew/async-vs-defer-in-javascript-which-is-better-26gm)
 - Event Bubbling and Event Capturing(Trickling): DONE
 - Event Delegation:
 - sum(a)(b)(c)(b): DONE
 - Prototype and Prototypal Inheritance:
 - CORS: DONE (https://javascript.info/fetch-crossorigin)
 - Machine Coding: 
 - Local Storage & Session Storage:
 - How browser rendering works(https://blog.logrocket.com/how-browser-rendering-works-behind-scenes/)
 - Preload Scanner(https://web.dev/articles/preload-scanner):
 - Optimisation techniques in JS:

 - Data Types and structures: primitive and non-primitive
 - How JS works, Execution Stack
 - How JS code is executed, Call stack
 - Hoisting in JS
 - How functions work in JS
 - window object
 - undefined vs not defined
 - Scope, Scope Chain and Lexical Environment
 - var, let and const: Scope, Hoisting and Immutability
 - Block Scope and Shadowing
 - Closures - Intro
 - Closures - Intermediate
 - Closures - Advanced
 - All about functions
 - Callback Functions
 - Async JS & Event Loop
 - JS Engine, V8 architecture
 - setTimeout
 - Higher Order Functions
 - map, filter and reduce
 - Callback Hell
 - Promises: Intro
 - Promises: Intermediate
 - Promises: Advanced
 - Async-Await: Intro: DONE
 - Async-Await Intermediate
 - Async-Await: Advanced
 - this keyword: DONE
 - ES6 features
 
 - Regex
 - DOM render
 - Single and Double Click
 - Async Progress bar
 - Matching Element in DOM
 - Array Polyfills
 - Array Push Event
 - Async Task with dependency
 - Basic Debouncing: DONE
 - Basic Throttling
 - Call, Apply and Bind
 - Cancelable Promise
 - Chain calculator
 - Clear all timeout
 - Currying
 - Custom JSON stringify
 - Deep Clone Object
 - Document Comparison
 - Event Emitter
 - Extended Event Emitter
 - Flatten Array
 - group by polyfill
 - Index file
 - Map limit
 - Memoization
 - Mutation observer
 - Object flattening
 - Pipe and compose
 - Promise.All
 - Promise.AllSettled
 - Promise.Any
 - Promise.Race
 - Prototype Inheritance
 - Retry Promises
 - Sequential Promises
 - Sort Array
 - Typehead Search
 - AbortController

---
Notes:
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
-> Synchronous vs Asynchronous
