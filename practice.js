// What is the difference between map and forEach
// map => returns new array, doesn't change original array, used for transformation, chaining
// forEach => returns undefined, can change original array, used for side effects, no chaining


// How to convert a number to string
// const num = 15;
// console.log(typeof num.toString()) // Output: string


function formLargestNumber(arr) {
    console.log(arr.map(ele => ele.toString()).sort().reverse().join(""));
}

const input = [3, 30, 9, 34, 5, 9];
formLargestNumber(input);


// const arr = ["2", "100", "9"];
// const sortedAscending = [...arr].sort(); // Create a shallow copy to avoid modifying original

// console.log("Original array:", arr);                 // ["2", "100", "9"]
// console.log("Lexical Ascending:", sortedAscending); // ["100", "2", "9"]


setTimeout(function () {
    console.log("This is a delayed message");
}, 2000);