function pramod_doing_work (worker, callback) {
    console.log("Started the class: " + worker);
    let work = worker;
    // Simulate doing work
    console.log("Finished the class: " + work);
    callback();
}

function callWife () {
    console.log("Call wife when done");
}

pramod_doing_work("PW Class", callWife);
