import { BasePage } from "./BasePage.js";

export class LoginPage extends BasePage {
    constructor () {    
        super("Login Page");
    }

    login (user) {
        console.log (user + " logged in");
    }
}