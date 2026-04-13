// Private Fields (#) — Hidden Data
// PUBLIC Fields 
class Credentials {
    #apiKey;

    constructor(user, key) {
        this.user = user; // public
        this.#apiKey = key;
    }
    // Custom function
    getAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}

let cred = new Credentials("admin", "#scret_key_1234");
console.log(cred.user);
// console.log(cred.apiKey); undefined
// console.log(cred.#apiKey); //error

console.log(cred.getAuthHeader());

// cred.apiKey is undefined
// (it doesn't exist). 
// cred.#apiKey would throw a SyntaxError. 
// The ONLY way to access it is through the public method getAuthHeader()