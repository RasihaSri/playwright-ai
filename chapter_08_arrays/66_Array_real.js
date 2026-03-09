let browser = ["chrome", "firefox", "edge", "safari", "opera"];
console.log(browser.length); // 5
console.log(browser);

browser.pop(); // Removes "opera" from the end of the array
console.log(browser); // ["chrome", "firefox", "edge", "safari"]

let removed = browser.shift(); // Removes "chrome" from the beginning of the array
console.log(removed); // "chrome"
console.log(browser); // ["firefox", "edge", "safari"]

browser.unshift("chrome"); // Adds "chrome" back to the beginning of the array
console.log(browser); // ["chrome", "firefox", "edge", "safari"]

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera is removed from selenium");
    }
}