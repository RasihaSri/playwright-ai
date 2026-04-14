interface Executable {
    name: string;
    run(): void;
    getStatus(): string;
}

class TestCase1 implements Executable {
    name: string;
    constructor (name: string) {
        this.name = name;
    }
    run (): void {
        console.log("[RUN]: " + this.name);
    }
    getStatus(): string {
        return "PASS";
    }
}

let tc: Executable =  new TestCase1("Verify Login Redirect");
tc.run();
console.log("Call: " + tc.getStatus());