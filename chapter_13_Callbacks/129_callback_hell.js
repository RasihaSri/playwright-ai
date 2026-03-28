// Real QA scenario: E2E login flow app.vwo.com

function openBrowser(callback) {
    console.log ("Opening the browser");

    setTimeout(function() {
        console.log ("Step 1: Browser starting...");
        callback(); // Step 2: Call the next function after opening the browser
    }, 500); // Simulating a delay of 2 seconds for opening the browser
}

function goToLoginPage(callback) {
    console.log ("Step 2: Navigating to the login page...");

    setTimeout(function() {
        console.log ("Step 2: Login page loaded");
        callback(); // Step 3: Call the next function after loading the login page
    }, 1000); // Simulating a delay of 1 second for loading the login page
}

function enterCredentials(callback) {
    console.log ("Step 3: Entering credentials...");    

    setTimeout(function() {
        console.log ("Step 3: Credentials entered");
        callback(); // Step 4: Call the next function after entering credentials
    }, 1500); // Simulating a delay of 1.5 seconds for entering credentials
}   

function clickLoginButton(callback) {
    console.log ("Step 4: Clicking the login button...");

    setTimeout(function() {
        console.log ("Step 4: Login button clicked");
        callback(); // Step 5: Call the next function after clicking the login button
    }, 500); // Simulating a delay of 0.5 seconds for clicking the login button
}

openBrowser(function() {
    goToLoginPage(function() {
        enterCredentials(function() {
            clickLoginButton(function() {
                console.log ("Step 5: Login successful, dashboard loaded");
            });
        });
    });

});