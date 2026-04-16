// Define interfaces for user data

interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
    gender?: string; // Optional property
}

// Create interfaces with optional properties

const user1: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    isActive: true,
    gender: "female"
};

let user2: User = {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    isActive: false
};


// Extend interfaces for inheritance
interface AdminUser extends User {
    role: string;
    permissions: string[];
}

const admin1: AdminUser = {
    id: 3,
    name: "Charlie",
    email: "charlie@example.com",
    isActive: true,
    role: "superadmin",
    permissions: ["read", "write", "delete"]
}

// Implement interfaces in classes
interface User1 {
    id: number;
    name: string;
    login(): void;
}

class Customer implements User1 {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    login(): void {
        console.log(this.name + " logged in");
    }
}

const customer1 = new Customer(1, "Rasiha");
customer1.login();
