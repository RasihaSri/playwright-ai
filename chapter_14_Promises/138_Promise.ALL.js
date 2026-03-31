let checkAuth = Promise.resolve ("Auth OK");
let checkDB = Promise.resolve ("DB OK");
let checkCache = Promise.resolve ("Cache OK");

Promise.all([checkAuth, checkDB, checkCache]).then(function(results) {
    console.log("All checks:", results);
})

Promise.all ([
    Promise.resolve("OK"),
    Promise.reject("DB Down"),
    Promise.resolve("OK")
])
    .then (function (r) {console.log("Results:", r);})
    .catch (function (e) {console.log("Error:", e);});

Promise.all ([
    Promise.resolve("OK"),
    Promise.resolve("OK"),
    Promise.resolve("OK")
])
    .then (function (r) {console.log("Results:", r);})
    .catch (function (e) {console.log("Error:", e);});