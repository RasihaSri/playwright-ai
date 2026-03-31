let apiCall = new Promise(function(resolve, reject) {
    reject("500 Error");
});

apiCall.then (function (data) {
    console.log("Data is success!!");
}).catch(function(error) {
    console.log("API Error:", error);
});

// .catch() is used to handle errors when a promise is rejected
// .then() is completely skipped