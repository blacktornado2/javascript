// They allow us to group together sets of statements
// Functions are reusable blocks of code that perform a specific task

// Function Statement
function getName() {
    return "Ankit";
}


// Function Expression
var getId = function () {
    return 1;
};


// Function Declaration: same as Function Statement


// Anonymous Function, SyntaxError: Function statements must have a name
// function () {
//     console.log("I am an anonymous function");
// }


// Named Function Expression
var getDetails = function details() {
    return "Details of the function";
};
getDetails(); // "Details of the function"
details(); // ReferenceError: details is not defined, because named function expressions are not hoisted like function declarations


// Parameters -> variables listed as part of the function definition
// Arguments -> values passed to the function when it is called 


// First Class Function
// Functions in JavaScript are first-class citizens, meaning they can be treated like any other value.
// They can be assigned to variables, passed as arguments to other functions, returned from functions, and stored in data structures.


// Arrow Function Expression, almost same as anonymous function, but with a shorter syntax and no `this` binding
var getAge = () => {
    return 25;
};


// Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("I am an IIFE");
})();


// Function Constructor
var getCountry = new Function("return 'India'");

// Function with Default Parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// Function with Rest Parameters
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Function with Spread Operator
function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
}

// Function with Destructuring Parameters
function displayUser({ name, age }) {
    return `Name: ${name}, Age: ${age}`;
}

// Function with Callback
function processData(data, callback) {
    const processedData = data.map(item => item * 2);
    return callback(processedData);
}

// Function with Promise
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Data from ${url}`);
            } else {
                reject("Invalid URL");
            }
        }, 1000);
    });
}

// Function with Async/Await
async function fetchUserData(url) {
    try {
        const data = await fetchData(url);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// Function with Closure
function makeCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

// Function with Memoization
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// Function with Currying
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return function (...args2) {
            return curried(...args, ...args2);
        };
    };
}

// Function with Throttling
function throttle(fn, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            return fn(...args);
        }
    };
}

// Function with Debouncing
function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

// Function with Generator
function* numberGenerator() {
    let num = 1;
    while (true) {
        yield num++;
    }
}

// Function with Iterator
function createIterator(array) {
    let index = 0;
    return {
        next: function () {
            if (index < array.length) {
                return { value: array[index++], done: false };
            } else {
                return { done: true };
            }
        }
    };
}

// Function with Symbol
function createSymbolFunction() {
    const uniqueSymbol = Symbol("uniqueFunction");
    return {
        [uniqueSymbol]: function () {
            return "This is a function with a symbol key";
        }
    }[uniqueSymbol];
}

// Function with Proxy
function createProxyFunction(target) {
    return new Proxy(target, {
        apply: function (target, thisArg, argumentsList) {
            console.log("Function called with arguments:", argumentsList);
            return target.apply(thisArg, argumentsList);
        }
    });
}

// Function with Reflect
function createReflectFunction(target) {
    return function (...args) {
        return Reflect.apply(target, this, args);
    };
}

// Function with Context Binding
function bindContext(fn, context) {
    return function (...args) {
        return fn.apply(context, args);
    };
}

// Function with Event Handling
function handleClick(event) {
    console.log("Button clicked:", event);
}

// Function with Error Handling
function safeExecute(fn) {
    try {
        fn();
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

// Function with Type Checking
function isString(value) {
    return typeof value === 'string';
}

// Function with Type Guard
function isNumber(value) {
    return typeof value === 'number';
}

// Function with Type Assertion
function assertIsString(value) {
    if (typeof value !== 'string') {
        throw new TypeError("Expected a string");
    }
    return value;
}
// Function with Type Inference
function inferType(value) {
    if (Array.isArray(value)) {
        return "array";
    } else if (typeof value === 'object') {
        return "object";
    } else {
        return typeof value;
    }
}
// Function with Type Aliases
type User = {
    name: string;
    age: number;
};
function createUser(user: User): string {
    return `User: ${user.name}, Age: ${user.age}`;
}
// Function with Type Union
type StringOrNumber = string | number;
function processValue(value: StringOrNumber): string {
    if (typeof value === 'string') {
        return `String value: ${value}`;
    } else {
        return `Number value: ${value}`;
    }
}
// Function with Type Intersection
type Person = {
    name: string;
    age: number;
};
type Address = {
    city: string;
    country: string;
};