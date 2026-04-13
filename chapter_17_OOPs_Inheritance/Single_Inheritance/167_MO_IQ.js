class BaseTest {
    setup () {
        console.log ("Base: open the browser")
    }

    teardown () {
        console.log ("Base: close the browser")
    }
}

class UITest extends BaseTest {
    setup () {
        super.setup(); // call the parent class setup function
        // super() - constructor of parent class, super.methodName() - methods of parent class
        console.log ("UI: maximize the window")
    }

    teardown () {
        console.log ("UI: take screenshot")
        super.teardown(); // call the parent class teardown function
    }
}

let test = new UITest();
test.setup();
console.log ("---");
test.teardown();