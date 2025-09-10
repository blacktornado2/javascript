const name1 = {
    firstName: "Ankit",
    lastName: "Bhardwaj",
    printFullName: function (arg) {
        console.log(`Full name is ${this.firstName} ${this.lastName}. Arg is ${arg}`);
    }
}

name1.printFullName('normal call'); // Full name is Ankit Bhardwaj

const name2 = {
    firstName: "Donald",
    lastName: "Trump",
}

// Function borrowing

// Generic Syntax: function.call/apply/bind(object)

// Bind -> binds the "this" value to the function, returns a new function, we can also pass arguments
const callback1 = name1.printFullName.bind(name2, "Hello bind");
callback1();


// Call and Apply -> bind the value of "this", and call the function
// Similar to bind, but they dont return a function, they call it immediately
// call() and apply() are identical in functionality, 
// the only difference is that call() accepts a list of arguments; whereas, apply() accepts a single array of arguments

name1.printFullName.call(name2, "Hello call")
name1.printFullName.apply(name2, ["Hello apply"])


// Summary
// call: binds the this value, invokes the function, and allows you to pass a list of arguments
// apply: binds the this value, invokes the function, and allows you to pass arguments as an array
// bind: binds the this value, returns a new function, and allows you to pass in a list of arguments