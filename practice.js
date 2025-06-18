// What is the difference between map and forEach
// map => returns new array, doesn't change original array, used for transformation, chaining
// forEach => returns undefined, can change original array, used for side effects, no chaining


// How to convert a number to string
// const num = 15;
// console.log(typeof num.toString()) // Output: string

const input = [3, 30, 9, 34, 5, 9];


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Form Largest Number using an array of numbers by concatenation
function formLargestNumber(arr) {
    const nums = arr.map(ele => ele.toString());

    // Custom comparator function to sort numbers based on concatenation
    nums.sort((a, b) => {
        return (b + a).localeCompare(a + b);
    });

    if (nums[0] == "0") {
        return "0";
    }
    return nums.join("");
}

formLargestNumber([54, 546, 548, 60]); // Output: "6054854654"
// formLargestNumber(input); // Output: "99534330"


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// const arr = ["2", "100", "9"];
// const sortedAscending = [...arr].sort(); // Create a shallow copy to avoid modifying original

// console.log("Original array:", arr);                 // ["2", "100", "9"]
// console.log("Lexical Ascending:", sortedAscending); // ["100", "2", "9"]


// setTimeout(function () {
//     console.log("This is a delayed message");
// }, 2000);


// Reduce: very versatile method, can be used as a forEach, map, filter, and more
// 1st param -> callback function, 2nd param -> Initial value of accumulator
// return the new value of acc

// Find sum of all elements in array
input.reduce((acc, curr) => {
    return acc + curr;
}, 0);

// Find max value in array
input.reduce((acc, curr) => Math.max(acc, curr), -Infinity);
