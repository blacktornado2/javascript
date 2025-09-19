// Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
// Takes array, returns array
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve("Result 1"), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve("Result 2"), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve("Result 3"), 1500)),
])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("One of the promises was rejected:", error);
  })
  .finally(() => {
    console.log("Promise.all completed");
  });

// The total time taken will be the time of the longest promise, which is 2000ms in this case.
// As soon as any of the promises is rejected, Promises.all will throw error immediately, and the catch block will be executed

// Promise.allSettled
// Creates a Promise that is resolved with an array of objects describing the outcome of each Promise,
// regardless of whether they were resolved or rejected.
Promise.allSettled([
  new Promise((resolve, reject) => setTimeout(() => resolve("Result 1"), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject("Error 2"), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve("Result 3"), 1500)),
])
  .then((results) => {
    console.log("All promises settled:", results);
  })
  .catch((error) => {
    console.error("All of the promises were rejected:", error);
  })
  .finally(() => {
    console.log("Promise.allSettled completed");
  });

// This will wait for all promises to settle, and the results will include both resolved and rejected outcomes.
// The output will be an array of objects with status and value or reason properties for each promise
// The total time taken will be the time of the longest promise, which is 2000ms in this case.
// The catch block will not be executed since all promises are settled, even if some are rejected.

// Promise.race
// Creates a Promise that is resolved or rejected as soon as one of the provided Promises settled, with the value or reason from that Promise.
// Takes array, returns first resolved or rejected value
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve("Result 1"), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject("Error 2"), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve("Result 3"), 1500)),
])
  .then((result) => {
    console.log("First promise resolved:", result);
  })
  .catch((error) => {
    console.error("First promise rejected:", error);
  })
  .finally(() => {
    console.log("Promise race completed");
  });

// This will resolve or reject as soon as the first promise resolves or rejects.
// In this case, it will resolve with 'Result 1' after 1000ms
// If the first promise had been rejected, it would have caught the error immediately.

// Promise.any
// Creates a Promise that is resolved with the value of the first resolved Promise, or rejected if all Promises are rejected.
// Takes array, returns first resolved value or throws AggregateError if all rejected
Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject("Error 1"), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve("Result 2"), 2000)),
  new Promise((resolve, reject) => setTimeout(() => reject("Error 3"), 1500)),
])
  .then((result) => {
    console.log("First resolved promise:", result);
  })
  .catch((error) => {
    console.error("All promises were rejected:", error);
  })
  .finally(() => {
    console.log("Promise.any completed");
  });
