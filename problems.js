// 1. Closures and Scope
// What will be logged to the console when the following code is executed, and why?

for (var i = 1; i <= 3; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}

// 2. The this Keyword
// Explain the output of each console.log statement in the code snippet below.
// What does this refer to in each context?

const user = {
  name: "Alex",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
  farewell: () => {
    console.log(`Goodbye, ${this.name}`);
  },
};

user.greet(); // Hello, Alex
const greetFunc = user.greet;
greetFunc(); // Hello, undefined
user.farewell(); // Goodbye, Alex

// 3. Prototypal Inheritance
// Demonstrate how to create a Dog object that inherits from an Animal object. The Animal object should have a speak method. The Dog object should have its own breed property and should be able to use the speak method. Implement this using Object.create().

// 4. Asynchronous JavaScript with Promises
// Write an asynchronous function called getCombinedData that fetches data from two different API endpoints concurrently:
// https://api.example.com/users/1
// https://api.example.com/posts/1
// The function should return an object that combines the results, like { user: <userData>, post: <postData> }. Make sure to handle potential errors.

async function getUser() {
  return new Promise((resolve) => setTimeout(resolve("user")), 2000);
}

async function getPost() {
  return new Promise((resolve) => setTimeout(resolve("post")), 2000);
}

async function getCombinedData() {
  const [user, post] = await Promise.all(getUsers(), getPost());
  return {
    user,
    post,
  };
}

// 5. Array Manipulation
// You have an array of user objects:

const users = [
  { id: 1, name: "John", age: 30, isActive: true },
  { id: 2, name: "Jane", age: 22, isActive: false },
  { id: 3, name: "Peter", age: 45, isActive: true },
  { id: 4, name: "Sue", age: 28, isActive: true },
];

// Using a combination of the .filter(), .map(), and .reduce() array methods, calculate the total age of all active users.
const totalAge = users.reduce((acc, curr) => {
  return acc + curr.age;
}, 0);

// 6. ES6 Destructuring and Spread Operator

// Write a function mergeUserData that takes two objects as arguments: user and profile.
// Use destructuring to extract the name and email from the user object and the avatar from the profile object.
// The function should then use the spread operator to return a new object containing only these three properties.

const mergeUserData = (user, profile) => {
  const { name, email } = user;
  const { avatar } = profile;
  return { name, email, avatar };
};

// 7. Event Delegation
// Explain the concept of event delegation in JavaScript. Provide a simple HTML and JavaScript example where you attach a single event listener
// to a <ul> element to handle click events on its <li> children, logging the text content of the clicked list item.

// 8. Currying
// Write a curried function calculate(operation) that takes a string ('add', 'subtract', 'multiply') and returns another function.
// The returned function takes two numbers (a and b) and performs the specified operation on them.

const calculate = (operation) => {
  return (a, b) => {
    switch (operation) {
      case "add":
        return a + b;
      case "subtract":
        return a - b;
      case "multiply":
        return a * b;
    }
  };
};

const add = calculate("add");
console.log(add(3, 9));

// 9. Hoisting
// What will the following code output to the console? Explain your reasoning based on the concepts of variable and function hoisting.
console.log(a);
var a = 5;

greet();

function greet() {
  console.log("Hello from function declaration!");
}

sayGoodbye();

var sayGoodbye = function () {
  console.log("Goodbye from function expression!");
};


// 10. Implement Debounce
// Write a function debounce(func, delay) that takes a function and a delay time (in milliseconds) as arguments. It should return a new function that, when called, will only execute the original function after the specified delay has passed without any new calls. This is useful for limiting the rate at which a function gets invoked, such as on a search input or window resize event.