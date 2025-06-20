setTimeout(() => {
    console.log("This is a delayed message");
}, 2000);


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const cart = ["Shoes", "Shirt", "Pants", "Glasses"];

api.createOrder();

api.proceedToPayment();

api.showOrderSummary();

api.updateWallet();

// We have to do something in order => create order first, then proceed to payment => show order summary => update wallet
// and we can't change the order of these operations

api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet();
        });
    });
});

// Callback hell, Pyramid of Doom


// Inversion of Control
api.createOrder(cart, function () {
    api.proceedToPayment();
});

// We gave the control to createOrder function to call the callback function when it is done
// We gave the control to the function that we are calling, it can call the callback function or not
// Inversion of control is a design principle where the flow of control is inverted, meaning that the framework or library calls the user-defined code instead of the user code calling the framework or library.