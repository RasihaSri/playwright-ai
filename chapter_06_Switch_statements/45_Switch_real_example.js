// You are working with API validation
// response status code is 200, 201, 400, 401, 403, 404, 500

let responseStatusCode = 404;

switch (responseStatusCode) {
    case 200:
        console.log("OK - The request has succeeded");
        break;          
    case 404:
        console.log("Not Found - The server can not find the requested resource");
        break;
    default:
        console.log("Unhandled status code");
}   