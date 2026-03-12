function retry (testName, retries = 3, delay = 1000 ) {
    console.log (`Retrying ${testName} with ${retries} retries and ${delay}ms delay`);
}

retry ("Login");
retry ("Checkout", 5);
retry ("Search", 2, 500); // overwrites the data