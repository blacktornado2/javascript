// ASYNC - AWAIT

// What is async
// Keyword used to make an async function
// 1. async function always returns a promise
// We can directly return a Promise
// OR if we return a value, the function will automatically wrap it in a promise

async function getData() {
  return "Ankit"; // Will be wrapped inside a promise
}

const data = getData();
// console.log(data); // Promise {state: "fulfilled", result: "Ankit"}
data.then((res) => console.log(res)); // Ankit

async function getSearchResults() {
  return new Promise((resolve, reject) => {
    resolve(["PS-5", "PC"]);
  });
}

const searchResultsPromsise = getSearchResults();

searchResultsPromsise.then((res) => console.log(res)); // ['PS-5', 'PC']

// async and await are used to handle promises

// Before async await
function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => console.log("Users-1: ", users));
}

getUsers();

// Using async-await
// await keyword is used in front of promise

async function getUsersAwait() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => users);
  console.log("Users-2", users);
}

getUsersAwait();

// await can only be used inside an async function

// older way
// Problem -> console.log will not wait

function getPost(id) {
  console.log("Before-1");

  // JS engine will not waits for the promise to resolved
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((post) => console.log("Post-1", post));

  console.log("After Post-1"); // Will be printed before post
}

getPost(1);

// Newer way
// Problem resolved -> code will run one by one

async function getPostAwait(id) {
  console.log("Before-2");

  // JS engine waits for the promise to resolve after the await keyword
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((post) => console.log("Post-2", post));

  console.log("After Post-2"); // Will be printed after post
}

getPostAwait(1);


/* New way of thinking 
  1. const data = fetchData();
  2. const data = await fetchData();

  1. data will have promise
  2. data will have actual data
  Principle: await will wait for the expression after it, to be fulfilled and then the valued will be assigned to the variable to the left
  direct call -> return promise, with await -> result of promise
*/