const user = {
    firstName: 'Pramod',
    lastName: 'Dutta',
    get fullName() {
        console.log("Getter called");
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        console.log("Setter called");
        [this.firstName, this.lastName] = value.split(" ");
    }
};

console.log(user.fullName); // Output: Pramod Dutta
user.fullName = "John Doe";
console.log(user.fullName); // Output: John Doe