class Student {
    static collegeName = "Playwright AT Batch";

    constructor(name) {
        this.name = name;
    }

    static display() {
        console.log (this.name + " is part of " + Student.collegeName);
    }
}

let amit = new Student ("Amit");
let miti_jha = new Student ("Miti Jha");
let sumu = new Student ("Sumu");
let padmini = new Student ("Padmini");
Student.display();

console.log (Student.collegeName); // Playwright AT Batch
console.log (amit.name); // Amit
console.log (miti_jha.name); // Miti Jha
console.log (Student.display()); 