let order = new Promise(function(resolve, reject) {
    let foodReady = true;
    if (foodReady) {
        resolve("Pizza is delivered!");
    } else {
        reject ("Order is cancelled!");
    }
});

console.log(order);