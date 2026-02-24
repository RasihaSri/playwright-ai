let statusCode = 200; // APIs are working fine

if (statusCode === 200) {
    console.log("API is working fine");
} else if (statusCode === 404) {
    console.log("API not found");
} else if (statusCode === 500) {
    console.log("API is having some issues");
} else {
    console.log("Unknown status code");
}   