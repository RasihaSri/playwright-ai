function logResults (suiteName, ...results) {
    console.log(`Suite: ${suiteName}:`)
    console.log(`Results: ${results.join(', ')}`);
}

logResults('Login Tests', 'pass', 'fail', 'pass'); 
// Suite: Login Tests
// Results: pass, fail, pass

function add (a,b,c) {
    return a + b + c;
}

let nums = [1, 2, 3];
add(...nums); // 6, because the spread operator expands the array into individual 
// arguments for the function

// Spread response codes into validator

function hasError (...codes) {
    return codes.some(code => code >= 400);
}

let responseCodes = [200, 201, 404, 500];
console.log(hasError(...responseCodes)); // true, because 404 and 500 are error codes (>=400)