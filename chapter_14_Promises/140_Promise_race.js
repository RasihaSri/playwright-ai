let fastServer = new Promise((resolve) => {
    setTimeout( function() {
        resolve("Fast 100ms");
    }, 100);
});

let slowServer = new Promise((resolve) => {
    setTimeout( function() {
        resolve("Slow 500ms");
    }, 500);
});

Promise.race([fastServer, slowServer]).then(function(winner) {
    console.log("Winner:", winner);
});

// Promise.race() returns the result of the first promise that settles (either resolves or rejects)
//  among the given promises. In this case, "Fast 100ms" will be logged as the winner since it resolves first.