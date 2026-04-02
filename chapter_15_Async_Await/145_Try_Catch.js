// Error Handling with Try-Catch in Async/Await

// With Promises you can use .catch()
// With Async/Await you can use try-catch blocks to handle errors, exactly like regular Javascript error handling.

async function testAPI() {
    try {
        let result = await Promise.reject("503: Service Unavailable!");
        console.log ("API Result:", result);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Cleanup done");
    }
}

testAPI(); // Error: Service Unavailable!

// try/catch/finally maps down to .then/.catch/.finally when using async/await, 
// making it easier to read and write asynchronous code with error handling.