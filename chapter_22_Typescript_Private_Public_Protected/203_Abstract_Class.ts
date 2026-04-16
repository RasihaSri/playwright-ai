abstract class BaseTest1 {
    protected testName: string;

    constructor(testName: string) {
        this.testName = testName;
    }

    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;

}

class UITest extends BaseTest1 {

    setup(): void { console.log("Setup Launch Browser"); }
    execute(): void { console.log("Execute: click buttons, fill forms"); }
    teardown(): void { console.log("Teardown: Close Browser");
    }
}