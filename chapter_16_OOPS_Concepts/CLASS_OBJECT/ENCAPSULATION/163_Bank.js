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

// ### Exercise 1: Basic Class and Object

class Bug {
  constructor(title, severity) {
    this.title = title;
    this.severity = severity;
  }

  display() {
    console.log("[" + this.severity + "] " + this.title);
  }
}

let b1 = new Bug("Login crash", "Critical");
let b2 = new Bug("Typo in footer", "Low");

b1.display(); // [Critical] Login crash
b2.display(); // [Low] Typo in footer

// ### Exercise 2: Constructor with Default Parameters


class Environment {
  constructor(name = "staging", port = 3000) {
    this.name = name;
    this.port = port;
  }

  getURL() {
    return "http://" + this.name + ":" + this.port;
  }
}

let env1 = new Environment();
let env2 = new Environment("production", 8080);

console.log(env1.getURL()); // http://staging:3000
console.log(env2.getURL()); // http://production:8080

// Exercise 3: `this` Refers to Current Object

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hi, I am " + this.name);
  }
}

let u1 = new User("Alice");
let u2 = new User("Bob");

u1.greet(); // Hi, I am Alice
u2.greet(); // Hi, I am Bob

// Exercise 4: Method Chaining with this

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
    return this;
  }

  display() {
    console.log("Count:", this.count);
    return this;
  }
}

new Counter().increment().increment().increment().display(); // Count: 3

// Exercise 5: Private Field

class Token {
  #value;

  constructor(val) {
    this.#value = val;
  }

  getToken() {
    return this.#value;
  }

  getMasked() {
    return "***" + this.#value.slice(-4);
  }
}

let t = new Token("abcdef1234");
console.log(t.getMasked()); // ***1234
console.log(t.getToken()); // abcdef1234
console.log(t.value); // undefined
