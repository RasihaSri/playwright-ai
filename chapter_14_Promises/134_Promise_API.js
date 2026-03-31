let apiCall = new Promise(function(resolve, reject) {
    resolve ({status: 200, data: 'User data'});
});

apiCall.then (function(response) {
    console.log("API Response:", response);
    console.log(response.status);
    console.log(response.data);
})

// .then() runs ONLY when the promise is resolved successfully. If the promise is rejected, it will not execute the .then() block. To handle errors, we can use .catch().