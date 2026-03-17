// Return values

function getStatus (code) {
    if (code >= 200 && code < 300) return 'success';
    if (code >= 400 && code < 500) return 'client error';
    if (code >= 500) return 'server error';
}

console.log(getStatus(200)) // 'success'
console.log(getStatus(404)) // 'client error'
console.log(getStatus(500)) // 'server error'

// returns nothing -> undefined
function logTest (name) {
    console.log(`Running test: ${name}`)
    // no return statement, so it returns undefined by default
}

logTest('IQ Test') // Logs "Running test: IQ Test" and returns undefined

// Return multiple values using an object or array

function aaa() {
    return [2,2,3,5,4];
    // return {"name": "Alice", "age": 30}; - object
}

