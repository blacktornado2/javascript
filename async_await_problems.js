// Beginner

// 1. Fetching User Data 🧍
// Problem: Create an async function called getUser that fetches data from the JSONPlaceholder API
// for a single user (e.g., user with ID 1). The function should then log the user's name to the console

const GET_USER_URL = "https://jsonplaceholder.typicode.com/users";
const GET_POST_URL = "https://jsonplaceholder.typicode.com/posts";
const GET_TODO_URL = "https://jsonplaceholder.typicode.com/todos";

async function getUser(id) {
  const res = await fetch(`${GET_USER_URL}/${id}`);
  const user = await res.json();
  console.log("userId = ", id, "user:", user.name);
  return user;
}

// getUser(1);

// ** 2. Simple Delay Function ⏳
// Problem: Write an async function called greetAfterDelay that takes a name (string) and a delay time (in milliseconds)
// as arguments. The function should wait for the specified delay and then log a greeting message like "Hello, [Name]!" to the console.

function delay(delayTime) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delayTime * 1000);
  });
}

async function greetAfterDelay(name, delayTime) {
  await delay(delayTime);
  console.log(`Hi, ${name}`);
}

// greetAfterDelay("Ankit", 5);

// 3. Handling Errors Gracefully 🙏
// Problem: Modify the getUser function from problem #1.
// Create a new function getUserOrHandleError that tries to fetch a user that doesn't exist (e.g., user with ID 999).
// Use a try...catch block to handle the error that will occur and log a user-friendly error message like "Oops, user not found!" to the console.

async function getUserOrHandleError(id) {
  try {
    const res = await fetch(`${GET_USER_URL}/${id}`);
    if (res.status != 200) {
      throw new Error("User not found");
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Oops, user not found!", error);
  }
}

// getUserOrHandleError(100);

// 4. Chaining Asynchronous Operations 🔗
// Problem: Write an async function getUsersFirstPost that first fetches a user (e.g., user with ID 2)
// and then uses that user's ID to fetch all of their posts from the API.
// Finally, log the title of the very first post to the console.

async function getUsersFirstPost(id) {
  const userResponse = await fetch(`${GET_USER_URL}/${id}`);
  const user = await userResponse.json();
  const userId = user.id;
  const postResponse = await fetch(`${GET_POST_URL}?userId=${userId}`);
  const posts = await postResponse.json();
  console.log("Post title: ", posts[0].title);
}

// getUsersFirstPost(2);

// 5. Running Promises in Parallel 🚀
// Problem: Create an async function getMultipleUsers that fetches data for two different users simultaneously (e.g., users with IDs 3 and 4).
// Use Promise.all to wait for both requests to complete and then log both user objects to the console.

async function getMultipleUsers(user1, user2) {
  const data = await Promise.all([getUser(user1), getUser(user2)]);

  return data;
}

// getMultipleUsers(1, 2);

// 6. Converting a .then() Chain to async/await
// Problem: Refactor the following code, which uses .then() callbacks, into a new async function called fetchAndLog
// that accomplishes the same thing using async/await

function fetchWithThen() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => {
      console.log("Todo title:", data.title);
    })
    .catch((error) => {
      console.error("Error fetching todo:", error);
    });
}

// Your new async function here
async function fetchAndLog() {
  try {
    const res = await fetch(`${GET_TODO_URL}/1`);
    const todo = await res.json();
    console.log("Todo title:", todo.title);
  } catch (error) {
    console.error("Error fetching todo:", error);
  }
}

// fetchAndLog();

// 7. Conditional Asynchronous Logic 🤔
// Problem: Write an async function checkServerStatus that fetches a simple resource (e.g., https://jsonplaceholder.typicode.com/todos/1)
// The function should check the response.ok property.
// If it's true, log "Server is online!". If it's false, log "Server is offline!".

async function checkServerStatus() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (res.ok) {
    console.log("Server is online!");
  } else {
    console.log("Server is offline!");
  }
}

// checkServerStatus();

// 8. Async Function Return Value 🎁
// Problem: Create an async function getPostData that fetches a single post (e.g., post with ID 5) and
// returns the post data object instead of logging it.
// Then, call this function and use .then() on the result to log the post's body.

async function getPostData(id) {
  const res = await fetch(`${GET_POST_URL}/${id}`);
  const data = await res.json();
  return data;
}

// getPostData(2).then((data) => console.log(data.body));

// 9. Simulating Multiple Independent Tasks 🏃‍♀️🏃‍♂️
// Problem: Imagine you have two independent tasks that take time: brewing coffee (2 seconds) and toasting bread (3 seconds).
// Create an async function makeBreakfast that starts both tasks at the same time and logs a message for each when it's done.
// Log "Breakfast is ready!" only after both are complete

async function brewCoffee() {
  console.log("Started brewing coffee...");
  await delay(2000);
  console.log("Coffee is ready!");
}

async function toastBread() {
  console.log("Started toasting bread...");
  await delay(3000);
  console.log("Bread is toasted!");
}

async function makeBreakfast() {
  await Promise.all([brewCoffee(), toastBread()]);
  console.log("Breakfast is ready!");
}

// makeBreakfast();

// 10. Sequential API Calls with a Loop 🔁
// Problem: Write an async function getThreeTodos that fetches the first three "todos" from the API one after another.
// Use a for loop that iterates from 1 to 3. Inside the loop, fetch the todo with the current ID and log its title.

async function getThreeTodos() {
  try {
    for (let todoId = 1; todoId <= 3; todoId++) {
      const res = await fetch(`${GET_TODO_URL}/${todoId}`);
      const data = await res.json();
      console.log(data.title);
    }
  } catch (error) {
    console.log("Error: ", error);
  }
}

getThreeTodos();
