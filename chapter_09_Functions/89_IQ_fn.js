function getStatus (code) {
    if (code >= 200 && code < 300) return 'success';
    if (code >= 400 && code < 500) return 'client error';
    if (code >= 500 && code < 600) return 'server error';
    return 'unknown status';
}

getStatus(200) // 'success'
getStatus(404) // 'client error'
getStatus(500) // 'server error'
getStatus(123) // 'unknown status'

function logTest (name) {
    console.log(`Running test: ${name}`)
    // no return statement, so it returns undefined by default
}

let result = logTest('IQ Test') // Logs "Running test: IQ Test"
console.log(result) // undefined

greet ('Alice');

function greet (name) {
    console.log(`Hello, ${name}!`)
}

sayHi('Bob'); // ReferenceError: Cannot access 'sayHi' before initialization

const sayHi = function (name) {
    console.log(`Hi, ${name}!`)
}