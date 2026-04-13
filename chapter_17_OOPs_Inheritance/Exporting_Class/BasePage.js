export class BasePage {
    constructor (name) {
        this.name = name;
    }

    open () {
        console.log ("[OPEN] " + this.name);
    }
}