class TestCase {
    execute() {
        console.log("Running generic test");
    }
}

class UnitTest extends TestCase {
    execute() {
        super.execute(); // call the parent class execute function
        console.log("Running unit test - checking one function");
    }
}

class APITest extends TestCase {
    execute() {
        super.execute(); // call the parent class execute function
        console.log("Running API test - checking API endpoints");
    }
}

class E2ETest extends TestCase {
    execute() {
        super.execute(); // call the parent class execute function
        console.log("Running E2E test - opening the browser");
    }
}

let tests = [new UnitTest(), new APITest(), new E2ETest()];
tests.forEach(test => test.execute());