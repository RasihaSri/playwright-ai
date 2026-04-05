class TestCase {
    constructor (name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }
    display () { // This is a method - Function inside the class is called method
        console.log (this.name + " - " + this.status + " - " + this.priority);
    }
}

let loginTest = new TestCase ("Login Test", "Passed", "P0");
let signupTest = new TestCase ("Signup Test", "Failed", "P1");
loginTest.display ();

// Functions vs Methods
// Method is function but inside the class
