// Callback

function placeOrder(item, callback) {
    console.log(`Placing order for ${item}...`);
    callback(); // function call
}

// Define
function print () {
    console.log ("callback - done with the order");
}

// First way - define the callback function separately and pass it as an argument
placeOrder("Pizza", print);
// Second way - define the callback function inline as an anonymous function
placeOrder("Burger", function() { // anonymous function
    console.log("Anoy, I am also a function without a name, I am a callback function");
});
// Third way - using arrow function
placeOrder("Pasta", () => {
    console.log("Arrow function as a callback");
});

// Callback - function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action.

function test (test, callback) {
    console.log ("Hi, this is test");
}

test ("Verify that the login page is working", function() {
    console.log ("running TC1");
});