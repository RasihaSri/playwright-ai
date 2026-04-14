enum Browser {
    Chrome = "chrome",
    Firefox = "firefox",
    Edge = "edge",
    Safari = "safari"
}

function launchBrowser(browser: Browser): void {
    switch (browser) {
        case Browser.Chrome:
            console.log("Launching Chrome...(Chrome v120)");
            break;
        case Browser.Firefox:
            console.log("Launching Firefox...(Firefox v115)");    
            break;
        case Browser.Edge:
            console.log("Launching Edge...(Edge v120)");
            break;
        case Browser.Safari:
            console.log("Launching Safari...(Safari v17)");
            break;
        default:
            console.log("Unknown browser!");
    }
}

launchBrowser(Browser.Chrome);
launchBrowser(Browser.Firefox);
launchBrowser(Browser.Edge);
launchBrowser(Browser.Safari);