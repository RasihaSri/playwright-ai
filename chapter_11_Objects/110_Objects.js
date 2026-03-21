let config = {};
config.browser = "chrome";
config.timeout = 5000;
config.timeout = 10000; // overwrite previous timeout
console.log(config); // Output: { browser: 'chrome', timeout: 10000 }

delete config.browser; // deletes the browser property
console.log(config); // Output: { timeout: 10000 }

// Objects are mutable, we can change their properties even if they are declared with const