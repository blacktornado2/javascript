// Intermediate

// TODO: what to use : get or fetch, solidify convention

const GET_USER_URL = "https://jsonplaceholder.typicode.com/users";
const GET_POST_URL = "https://jsonplaceholder.typicode.com/posts";
const GET_TODO_URL = "https://jsonplaceholder.typicode.com/todos";
const GET_COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

// 1. Sequential vs. Parallel Execution 🏃‍♂️...🏃‍♀️
// Problem: Write an async function fetchUserAndPosts that takes a userId.
// It should fetch the user's data and their posts simultaneously (in parallel).
// Once both are complete, it should return an object containing the user's data and their posts.

async function fetchUser(userId) {
  const res = await fetch(`${GET_USER_URL}/${userId}`);
  const user = await res.json();
  return user;
}

async function fetchPosts(userId) {
  const res = await fetch(`${GET_POST_URL}?userId=${userId}`);
  const posts = await res.json();
  return posts;
}

async function fetchUserAndPosts(userId) {
  const [user, posts] = await Promise.all([
    fetchUser(userId),
    fetchPosts(userId),
  ]);
  return {
    user,
    posts,
  };
}

// 2. Implementing a Retry Mechanism 🔁
// Problem: Create an async function fetchWithRetry that takes a URL and a retries count. It should attempt to fetch the URL. If the fetch fails (e.g., the server is down),
// it should wait for 1 second before trying again, up to the maximum number of retries. If all retries fail, it should throw the last error it received.

const delay = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function fetchWithRetry(url, maxRetry) {
  try {
    const res = await fetch(`${GET_USER_URL}/1`);
    const user = await res.json();
  } catch (error) {
    for (const retry = 1; retry <= maxRetry; retry++) {
      try {
        await delay(1000);
        const res = await fetch(`${GET_USER_URL}/1`);
        const user = await res.json();
        return user;
      } catch (error) {
        if (retry == maxRetry) {
          throw new Error("Error");
        }
      }
    }
  }
}

// 3. Handling Timeouts ⏱️
// Problem: Write an async function fetchWithTimeout that takes a URL and a timeout duration in milliseconds.
// It should try to fetch the resource, but if the request takes longer than the specified timeout, it should throw a "Request timed out!" error.

const delayNew = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve("timeout"), ms));
};

async function fetchWithTimeout(url, timeout) {
  const res = await Promise.race([delay(timeout), fetch(url)]);
  if (res === "timeout") {
    throw new Error("Request timed out!");
  } else {
    return res;
  }
}

// 4. Async Waterfall / Dependent API Calls 🏞️
// Problem: Create an async function getUsersFirstPostFirstComment. This function should perform a sequence of dependent API calls:
// Fetch a list of users.
// Take the ID of the first user from the list.
// Fetch all posts by that user.
// Take the ID of the first post.
// Fetch all comments for that post.
// Return the body of the first comment.

async function fetchUsers(userId) {
  const res = await fetch(`${GET_USER_URL}`);
  const users = await res.json();
  return users;
}

async function fetchComments(postId) {
  const res = await fetch(`${GET_COMMENTS_URL}?postId=${postId}`);
  const users = await res.json();
  return users;
}

async function getUsersFirstPostFirstComment() {
  const users = await fetchUsers();
  const userId = users[0].id;
  const posts = await fetchPosts(userId);
  const postId = posts[0].id;
  const comments = fetchComments(postId);
  return comments[0].body;
}

// 5. "Promisifying" a Callback Function 🎁
// Problem: The provided getData function uses an old-style callback
// Create a "wrapper" or "promisified" function called getDataAsync that converts it to a promise-based function
// Then, use your new function with async/await to fetch the data and log it

// This is the old function you cannot change
function getData(id, callback) {
  setTimeout(() => {
    if (id === 1) {
      callback(null, { id: 1, data: "Sample Data" });
    } else {
      callback(new Error("Data not found"), null);
    }
  }, 1000);
}

function getDataAsync(id) {
  // Your code here to wrap `getData` in a promise
}

// Use your new function here
async function main() {
  try {
    const data = await getDataAsync(1);
    console.log("Success:", data);
    await getDataAsync(2);
  } catch (error) {
    console.error("Caught error:", error.message);
  }
}

main();

// 6. Rate Limiting API Calls 🚦
// Problem: You have an array of 10 photo IDs. Write an async function fetchPhotosInBatches that fetches the data for these photos,
// but to avoid overwhelming the server, it should only process them in batches of 3. It should fetch one batch, wait for it to complete, and then move to the next.

const photoIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

async function fetchPhoto(id) {
  // Simulates a fetch call
  console.log(`Fetching photo ${id}...`);
  await new Promise((r) => setTimeout(r, 200)); // simulate network delay
  return `Data for photo ${id}`;
}

async function fetchPhotosInBatches(photoIds) {
  let data = [];
  for (const i = 0; i < photoIds.length; i += 3) {
    const newData = await Promise.all(
      fetchPhoto(photoIds[i]),
      fetchPhoto(photoIds[i + 1]),
      fetchPhoto(photoIds[i + 2])
    );
    data = [...data, ...newData];
  }
  return data;
}

fetchPhotosInBatches(photoIds).then(() => console.log("All batches complete!"));

// 7. Conditional Fetching 🚦
// Problem: Write an async function getCachedUserData that first tries to retrieve user data from a (simulated) cache
// If the data exists in the cache, return it. If not, fetch it from the API, store it in the cache for future use, and then return it

const userCache = new Map();

async function getFromCache(key) {
  console.log("Checking cache...");
  return userCache.get(key);
}

async function setInCache(key, value) {
  console.log("Setting cache...");
  userCache.set(key, value);
}

async function fetchUserFromAPI(userId) {
  console.log("Fetching from API...");
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return response.json();
}

async function getCachedUserData(userId) {
  const cachedUserData = await getFromCache(userId);
  if (cachedUserData) {
    return cachedUserData;
  }
  const user = await fetchUserFromAPI(userId);
  await setInCache(userId, user);
  return user;
}

// First call should fetch from API, second should hit the cache
getCachedUserData(3).then(() => getCachedUserData(3));


// 8. async/await in Loops: map vs. for...of 🤔
// Problem: You are given an array of user IDs. Use a for...of loop to fetch each user sequentially and log their name. 
// Then, try to do the same thing using Array.prototype.map and explain why the behavior is different

const userIds = [2, 3, 4];

async function fetchAndLogUsersSequentially(ids) {
  console.log('Fetching sequentially with for...of:');
  // Your for...of loop here
}

async function attemptFetchWithMap(ids) {
  console.log('\nAttempting to fetch with .map:');
  // Your .map call here
}

fetchAndLogUsersSequentially(userIds).then(() => attemptFetchWithMap(userIds));


// 9. Aggregating API Results 📦
// Problem: Write an async function getPostAndAuthor that takes a postId. It should fetch the post data and then, using the userId from the post data, fetch the author's data. 
// Finally, it should merge the results and return a new object: { ...post, author: { ...user } }.

async function getPostAndAuthor(postId) {
  // Your code here
}

getPostAndAuthor(15).then(result => console.log(result));


// 10. Graceful Shutdown with Promise.allSettled 🚦
// Problem: You need to fetch data from three different API endpoints. Some might succeed, and others might fail. 
// Write an async function fetchAllResources that fetches all three URLs concurrently. 
// It should log the result of each request, whether it succeeded ('fulfilled') or failed ('rejected'), without crashing the entire operation.

const urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/invalid-url', // This will fail
  'https://jsonplaceholder.typicode.com/posts/1'
];

async function fetchAllResources(urls) {
  // Your code here
}

fetchAllResources(urls);
