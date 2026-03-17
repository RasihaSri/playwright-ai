function add(a,b,c) {
    return a + b + c;
}

let num = [1, 2, 3];
add(...num); // 6, because the spread operator expands the array into individual

function hasError (...codes) {
    return codes.some(code => code >= 400);
}

let responseCodes = [200, 201, 404, 500];
console.log(hasError(...responseCodes)); // true, because 404 and 500 are error codes (>=400)