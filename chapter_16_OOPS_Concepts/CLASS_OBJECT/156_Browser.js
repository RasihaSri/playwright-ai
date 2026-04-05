class Browser {
    constructor (name) {
        this.name = name;
        this.isOpen = true;
        console.log (name + " launched");
    }

    startBrowser () {
        console.log ("Starting the browser " + this.name);
    }

    closeBrowser () {
        console.log ("Closing the browser " + this.name);
    }

    startBrowser (b_name) {
        console.log ("Starting the browser " + b_name);
    }
}

let chrome = new Browser ("Chrome");
let firefox = new Browser ("Firefox");

console.log (chrome.isOpen); // true