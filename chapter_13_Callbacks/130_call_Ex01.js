function greetTester (name, callback) {
     console.log ("Welcome" + name);
     callback();
}

greetTester ("Dev", function() {
    console.log ("Let's start testing");
})

// Callback with parameters

function runTest (testName, callback) {
    let status = "Pass";
    callback(testName, status);
}

runTest ("Login Test", function(name, result) {
    console.log (name + "-> " + result);
});

// Sync Callback - forEach
let bugs = ["UI Glitch", "API Timeout", "Wrong direct"];

bugs.forEach(function(bug, i) {
    console.log ("Bug #" + (i + 1) + ": " + bug);
});

console.log ("Total Bugs: " + bugs.length);