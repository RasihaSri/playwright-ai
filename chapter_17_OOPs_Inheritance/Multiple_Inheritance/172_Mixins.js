// class C extends A, B {} // Not possible in JS Syntax Error

// Mixins - A mixin is a class that provides methods to other classes without being a parent class. 
// It is a way to achieve multiple inheritance in JavaScript.

// Mixin 1: Adds logging functionality

let loggerMixin = function (Base) {
    return class extends Base {
        log (msg) {
            console.log ("[Log:] " + msg);
        }
    }
}

// Mixin 2: Adds screenshot functionality

let screenshotMixin = function (Base) {
    return class extends Base {
        takeScreenshot () {
            console.log ("Taking screenshot");
        }
    }
}

// Base class
class TestCase {
    constructor(name) {
        this.name = name;
    }

    run () {
        console.log ("Running " + this.name);
    }
}

// Apply both mixins
class SmartTest extends screenshotMixin(loggerMixin(TestCase)) {
    constructor(name) {
        super(name);
    }
}

let t = new SmartTest("Login Flow");
t.run(); // Running Login Flow
t.log("Test Started"); // [Log:] Test Started
t.takeScreenshot(); // Taking screenshot