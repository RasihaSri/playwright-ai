const config = { browser: 'Chrome' , timeout : 5000 };
// Modifying the property of a const object is allowed
config.browser = 'Firefox'; // This is valid
config.timeout = 10000; // This is valid
config.retries = 3; // This is valid
console.log(config); // Output: { browser: 'Firefox', timeout: 10000, retries: 3 }

config.browser = 'Edge'; // This is valid
console.log(config); // Output: { browser: 'Edge', timeout: 10000, retries: 3 }

// However, reassigning the entire object is not allowed
// config = { browser: 'Safari1', timeout: 3000 }; // This will throw an error

let config2 = { browser: 'Chrome' , timeout : 5000 };
config2.browser = 'Firefox'; // This is valid
config2.timeout = 10000; // This is valid
config2.retries = 3; // This is valid

console.log(config2); // Output: { browser: 'Firefox', timeout: 10000, retries: 3 }

config2 = { browser: 'Safari', timeout: 3000 }; // This is valid
console.log (config2); // Output: { browser: 'Safari', timeout: 3000 }