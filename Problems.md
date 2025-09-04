# 10 High-Quality JavaScript Promise Interview Questions

## Questions

 1. **The Microtask Queue and the Event Loop**: In what order will the messages be logged to the console, and why? Explain the roles of the Call Stack, Microtask Queue, and Macrotask Queue.

    ```javascript
    console.log('Start');

    setTimeout(() => console.log('setTimeout'), 0);

    Promise
      .resolve()
      .then(() => console.log('Promise 1'))
      .then(() => console.log('Promise 2'));

    console.log('End');
    ```

 2. **Error Propagation and Recovery in Chains**: In a promise chain, how does error propagation work? How can you recover from an error in the middle of a chain and allow subsequent `.then()` handlers to execute?

 3. **`Promise.all()` vs. `Promise.allSettled()`**: What is the fundamental difference between `Promise.all()` and `Promise.allSettled()`? Describe a practical scenario where you would strongly prefer `Promise.allSettled()`.

 4. **`async/await` Under the Hood**: The `async/await` syntax is often described as "syntactic sugar" over Promises. What does this mean? How could you replicate the behavior of a simple `async/await` function using only `.then()` and `.catch()`?

 5. **The Promise Constructor Anti-Pattern**: What is the "Promise constructor anti-pattern"? Provide an example and explain why it is considered an anti-pattern. How should it be refactored?

 6. **The Behavior of `.finally()`**: Can a `.finally()` callback alter the final resolved value or rejection reason of a promise? Explain its behavior in both resolved and rejected scenarios.

 7. **Sequential vs. Parallel Execution with `async/await`**: You have an array of user IDs and need to fetch details for each user. Write two `async` functions: one that fetches the user data sequentially and another that fetches it in parallel. Discuss the trade-offs.

 8. **Promisifying a Callback-Based Function**: Write a generic `promisify` function that converts an error-first callback-style function into one that returns a promise.

 9. **`Promise.race()` vs. `Promise.any()`**: Explain the key differences between `Promise.race()` and `Promise.any()`. When would you choose one over the other?

10. **Unhandled Promise Rejections**: What happens when a promise is rejected but has no `.catch()` handler? How can you globally catch these unhandled rejections in Node.js and the browser?

## Answers

### 1. The Microtask Queue and the Event Loop

The output will be:
`Start`
`End`
`Promise 1`
`Promise 2`
`setTimeout`

**Reasoning:**

1. **`Start` and `End`** are synchronous, so they are logged immediately as they are processed on the **Call Stack**.

2. The `setTimeout` callback is placed in the **Macrotask Queue**.

3. The `.then()` callback (`Promise 1`) is placed in the **Microtask Queue**.

4. After the Call Stack is empty, the Event Loop prioritizes the **Microtask Queue** over the Macrotask Queue.

5. `Promise 1` is logged. Its `.then()` resolves, and the next `.then()` for `Promise 2` is queued as another microtask.

6. The Event Loop processes the next microtask, logging `Promise 2`.

7. With the Microtask Queue now empty, the Event Loop processes the Macrotask Queue, finally logging `setTimeout`.

### 2. Error Propagation and Recovery in Chains

An error in a promise chain will bypass all subsequent `.then()` handlers and fall through to the next available `.catch()` handler.

You can **recover** from an error within a `.catch()` block by **returning a new value or a resolved promise**. This transforms the rejection into a resolution, allowing the chain to continue executing subsequent `.then()` handlers.

**Example of Recovery:**

```javascript
Promise.resolve()
  .then(() => {
    throw new Error('Something went wrong!');
  })
  .then(() => {
    // This block is skipped
    console.log('This will not run');
  })
  .catch(error => {
    console.error('Caught an error:', error.message);
    // Recover by returning a default value
    return 'Recovered Value'; 
  })
  .then(value => {
    // This block now executes because the error was handled
    console.log('Executing after recovery with:', value); 
  });
```

### 3. `Promise.all()` vs. `Promise.allSettled()`

The fundamental difference is their **fail-fast behavior**.

* `Promise.all()`: Rejects as soon as **any** of the input promises reject. It's an "all or nothing" approach. It resolves only if all promises resolve.

* `Promise.allSettled()`: **Never rejects**. It waits for all promises to settle (either fulfilled or rejected) and then resolves with an array of objects describing the outcome of each promise.

**Scenario for `Promise.allSettled()`:**
Use `Promise.allSettled()` when you need the results of multiple independent asynchronous operations, and you want to process the successful ones even if some of them fail. For example, fetching data from several different API endpoints for a dashboard. If one API fails, you still want to display the data from the APIs that succeeded.

### 4. `async/await` Under the Hood

"Syntactic sugar" means `async/await` is a cleaner, more readable syntax for writing promise-based code without adding new core functionality. An `async` function always returns a promise, and `await` pauses the function's execution until a promise settles.

**`async/await` version:**

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
}
```

**Equivalent `.then/.catch` version:**

```javascript
function fetchData() {
  return fetch('https://api.example.com/data')
    .then(response => {
      return response.json(); 
    })
    .catch(error => {
      console.error('Failed to fetch:', error);
      throw error;
    });
}
```

### 5. The Promise Constructor Anti-Pattern

This anti-pattern involves unnecessarily wrapping an existing promise or a thenable in a `new Promise()` constructor. This adds redundant code and can complicate error handling.

**Anti-Pattern Example:**

```javascript
function getUserData(userId) {
  // BAD: Redundant wrapping
  return new Promise((resolve, reject) => {
    fetch(`/api/users/${userId}`)
      .then(response => resolve(response.json()))
      .catch(err => reject(err));
  });
}
```

**Refactored (Correct) Version:**
The `fetch()` function already returns a promise, so you should return its chain directly.

```javascript
function getUserData(userId) {
  // GOOD: Directly return the promise chain
  return fetch(`/api/users/${userId}`)
        .then(response => response.json());
}
```

### 6. The Behavior of `.finally()`

Generally, a `.finally()` callback **cannot** alter the final resolved value or rejection reason. Its main purpose is for cleanup code (e.g., hiding a loading spinner) that should run regardless of the outcome.

* It receives **no arguments**.

* If the promise resolves, `.finally()` runs, and the original resolved value is passed on.

* If the promise rejects, `.finally()` runs, and the original rejection reason is passed on.

The only way `.finally()` can change the outcome is if it **throws an error** or **returns a rejected promise**, which will cause the entire chain to reject with that new reason.

### 7. Sequential vs. Parallel Execution with `async/await`

**Sequential (one by one):**

```javascript
async function fetchUsersSequentially(userIds) {
  const users = [];
  for (const id of userIds) {
    const response = await fetch(`/api/users/${id}`);
    const user = await response.json();
    users.push(user);
  }
  return users;
}
```

**Parallel (all at once):**

```javascript
async function fetchUsersInParallel(userIds) {
  const promises = userIds.map(id => 
    fetch(`/api/users/${id}`).then(res => res.json())
  );
  const users = await Promise.all(promises);
  return users;
}
```

**Trade-offs:**

* **Performance**: Parallel is significantly faster for network requests.

* **Rate Limiting**: Sequential is better for APIs with strict request limits.

* **Error Handling**: A single failure in the parallel `Promise.all` approach will reject the entire operation, whereas the sequential approach can handle errors within the loop and continue.

### 8. Promisifying a Callback-Based Function

This generic function takes a function that uses an error-first callback and returns a new function that returns a promise.

```javascript
function promisify(callbackBasedFn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      // The custom callback that bridges the two patterns
      const customCallback = (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      };
      // Call the original function, adding our callback
      callbackBasedFn.apply(this, [...args, customCallback]);
    });
  };
}

// Node.js also has a built-in version: util.promisify
```

### 9. `Promise.race()` vs. `Promise.any()`

* `Promise.race()`: Settles as soon as the **first promise settles** (either fulfills or rejects). If the first one to finish is a rejection, `Promise.race()` rejects.

  * **Use Case**: Implementing a timeout. You can race a network request against a timer promise.

* `Promise.any()`: Settles as soon as the **first promise fulfills**. It ignores all rejections unless *all* input promises reject. If all reject, it rejects with an `AggregateError`.

  * **Use Case**: Fetching a resource from multiple redundant sources (e.g., different CDNs). You only need the first successful response.

### 10. Unhandled Promise Rejections

An unhandled rejection occurs when a promise is rejected, but no `.catch()` handler is attached to its chain.

* **Behavior**: In Node.js, it triggers an `UnhandledPromiseRejectionWarning`. In browsers, it logs an error to the console. In future versions of Node.js, this is expected to terminate the process.

* **Global Catching**: You can catch these globally to log errors or perform emergency cleanup.

**In Browsers:**

```javascript
window.addEventListener('unhandledrejection', event => {
  console.error('Unhandled rejection:', event.reason);
});
```

**In Node.js:**

```javascript
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
```
