// let p = new Promise((resolve, reject) => {
//     resolve(42);
// });

// p.then((value) => {
//     console.log("Answer", value);
// }); // Answer: 42

// let p = new Promise (function (resolve, reject) {
//     reject ("Something broke!");
// });

// p.catch (function (error) {
//     console.log("Caught:", error);
// }); // Caught: Something broke!

// let p = Promise.resolve(5);

// p.then(function(val) {
//     return val * 10;
// }).then(function(val) {
//     console.log("Result:", val);
// }); // Result: 50

// Promise.resolve(1)
//     .then(function(val) {
//         console.log(val);
//         return val + 1;
//     })
//     .then(function(val) {
//         console.log(val);
//         return val + 1;
//     })
//     .then(function(val) {
//         console.log(val);
//     }); // 1, 2, 3

// Promise.resolve ("start")
//     .then(function(val) {
//         console.log(val);
//         throw new Error ("Broke at step 2");
//     })
//     .then (function(val) {
//         console.log("This will NOT run");
//     })
//     .catch (function(error) {
//         console.log("Caught:", error.message);
//     }); // start, Caught: Broke at step 2

// Promise.reject ("Test failed!")
//     .then(function(data) {
//         console.log("Data:", data);
//     })
//     .catch(function(error) {
//         console.log("Error:", error);
//     })
//     .finally(function() {
//         console.log("Cleanup done");
//     }); // Error: Test failed! Cleanup done

// Promise.resolve("Quick win").then(function(msg) {
//     console.log(msg);
// });

// Promise.reject("Quick loss").catch(function(msg) {
//     console.log(msg);
// }); // Quick win Quick loss


// let t1 = Promise.resolve("Login: PASS");
// let t2 = Promise.resolve("Search: PASS");
// let t3 = Promise.resolve("Logout: PASS");

// Promise.all([t1, t2, t3]).then(function(results) {
//     console.log("All tests passed:", results);
// }); // All tests passed: [ 'Login: PASS', 'Search: PASS', 'Logout: PASS' ]


// let t1 = Promise.resolve("PASS");
// let t2 = Promise.reject("FAIL");
// let t3 = Promise.resolve("PASS");

// Promise.all([t1, t2, t3])
//      .then(function(r) { console.log("All:", r);})
//      .catch(function(e) { console.log("Stopped:", e);}); // Error: FAIL


Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function(results) {
    results.forEach(function(r) {
        let val = r.status === "fulfilled" ? r.value : r.reason;
        console.log(`${r.status}: ${val}`);
    });
});