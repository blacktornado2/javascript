// Function currying

const multiply = (a, b) => {
    console.log(a * b);
    return a * b;
}

// 1. bind method
const multiplyByTwo = multiply.bind(this, 2);
const multiplyByThree = multiply.bind(this, 3);


multiplyByTwo(5); // 10
multiplyByThree(6); // 18


// 2. Function closures
const multiplyClosure = (a) => {
    return function (b) {
        console.log(a * b);
        return a * b;
    }
}

const mutiplyByTwoClosure = multiplyClosure(2);
mutiplyByTwoClosure(7); // 14

// Problem
// sum(1)(2)(3)(4)() // 10
// We can have any number of function calls
// We will stop whenever we will encounter empty()

// Recursive function
const sum = function (a) {
    return function (b) {
        if (!b) return a;
        return sum(a + b);
    }
}


console.log(sum(1)(2)(3)(4)(5)()) // 15