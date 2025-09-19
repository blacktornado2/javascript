// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Creating a Promise, Chaining and Error Handling

const cart = ["Jeans", "T-Shirt", "Sneakers"];


const createOrder = (cart) => {
    // Promise constructor takes a function with two parameters: resolve and reject
    const promise = new Promise((resolve, reject) => {
        console.log("Creating order with cart: ", cart);
        setTimeout(() => {
            // Simulating order creation
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                const orderId = "ORDER::" + Math.floor(Math.random() * 100000);
                // Resolve the promise with the orderId
                resolve(orderId);
            } else {
                // Reject the promise with an error message
                reject("Failed to create order. Please try again.");
            }

        }, 2500)
    });
    return promise;
}


const proceedToPayment = (orderId) => {
    return new Promise((resolve, reject) => {
        console.log("Proceeding to payment for order ID:", orderId);
        setTimeout(() => {
            // Simulating payment processing
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                const paymentId = "PAYMENT::" + Math.floor(Math.random() * 100000);
                // Resolve the promise with the paymentId
                resolve(paymentId);
            } else {
                // Reject the promise with an error message
                reject("Payment failed. Please try again.");
            }
        }, 2000);
    });
}


// Consuming the promises
createOrder(cart)
    .then((orderId) => {
        console.log("Order created with ID:", orderId);
        return proceedToPayment(orderId);
    })
    .then((paymentId) => {
        console.log("Payment successful with ID:", paymentId);
    })
    .catch(error => {
        console.log("Error:", error);
    })

// TODO: Promise Hell
