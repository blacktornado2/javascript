// Promises are used to handle asynchronous operations in JavaScript.
// They represent a value that may be available now, or in the future, or never.

const cart = ["Shoes", "Shirt", "Pants", "Glasses"];
const orderId = "12345";

function createOrder(cart, callback) {
    console.log("createOrder called with cart:", cart);
}

function proceedToPayment(orderId, callback) {
    console.log("proceedToPayment called with orderId:", orderId);
}


// createOrder(cart) // return orderId

// proceedToPayment(orderId) // return paymentId

// How to use them using callback

// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId);
// });


// Promises!!
// const promise = createOrder(cart);

// {data: undefined, status: "pending"} -> {data: orderDetails, status: "fulfilled"}
// A promise an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Promise has two things: state and result
// state can be pending, fulfilled, or rejected
// result can be anything, but usually it is the result of the operation

// promise.
//     then(function (orderId) {
//         return proceedToPayment(orderId);
//     });


const user = fetch("https://jsonplaceholder.typicode.com/users/1");
console.log(user);

// Attach callback to the promise
user.then(function (data) {
    console.log("data: ", data);
    return data.json();
})


// data.json() is an asynchronous method in JavaScript, and it returns a Promise.

// Asynchronous: 
//  - This means it doesn't block the main thread of execution. When you call data.json(), it immediately returns a Promise, and the rest of your code continues to run.
//  - The actual parsing of the JSON data from the response stream happens in the background.
// Why is it asynchronous? 
//  - The data object you're calling .json() on is typically a Response object obtained from a fetch() request (or similar API).
//  - When fetch() resolves, it only means the response headers have been received. The actual response body (which contains the JSON text) might still be streaming over the network. 
//  - data.json() needs to read that entire stream to completion and then parse the text as JSON. Reading from a network stream is an I/O operation, and I/O operations are inherently asynchronous in browsers and Node.js environments to prevent freezing the user interface.


// Promise chaining
createOrder(cart).
    then((orderId) => {
        console.log("Order created with ID:", orderId);
        return proceedToPayment(orderId);
    }).then((paymentId) => {
        console.log("Payment successful with ID:", paymentId);
        return updateWallet(paymentId);
    }).then((walletStatus) => {
        console.log("Wallet updated successfully:", walletStatus);
    }).catch((error) => {
        console.error("An error occurred:", error);
    });



