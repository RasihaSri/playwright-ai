class Car {

    // Attributes
    // Constructor
    constructor  (assigned_name) {
        this.name = assigned_name;
    }

    drive () {
        console.log ("Driving the car" + this.name);
    }

    printDetailsCar () {
        console.log ("Car details" + this.name);
    }

}

let hyundai_car = new Car ("i10");
hyundai_car.drive();