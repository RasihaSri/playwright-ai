class ICICI {
    #balance;

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not allowed");
        }
    }
}

let pramod = new ICICI ("Pramod", 1000);
console.log (pramod.getBalance()); // 1000
pramod.setBalance(2000, false);
console.log (pramod.getBalance()); // 1000

let pramod_father = new ICICI ("Pramod", 5000);
console.log (pramod_father.getBalance()); // 5000
pramod_father.setBalance(30000, true);
console.log (pramod_father.getBalance()); // 30000