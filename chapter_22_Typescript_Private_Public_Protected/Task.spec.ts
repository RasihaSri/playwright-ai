// 1. Define interfaces for user data

// Interfaces describe the structure of an object.

interface User1 {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const user1: User1 = {
    id: 1,
    name: "Rasiha",
    email: "rasiha@example.com",
    isActive: true
};
// 2. Create interfaces with optional properties

// Use ? to mark properties as optional.

interface UserProfile {
    id: number;
    name: string;
    email?: string;   // optional
    phone?: string;   // optional
}

const user2: UserProfile = {
    id: 2,
    name: "Amit"
    // email and phone are not required
};
// 3. Extend interfaces for inheritance

// Interfaces can inherit from other interfaces using extends.

interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
    department: string;
}

const emp: Employee = {
    name: "Miti",
    age: 25,
    employeeId: 101,
    department: "QA"
};

// You can extend multiple interfaces too:

interface Contact {
    email: string;
}

interface Staff extends Person, Contact {
    role: string;
}
// 4. Implement interfaces in classes

// Classes use implements to follow an interface contract.

interface IUser {
    id: number;
    name: string;
    login(): void;
}

class UserAccount implements IUser {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    login(): void {
        console.log(`${this.name} logged in`);
    }
}

const u1 = new UserAccount(1, "Sumu");
u1.login();
// Bonus: Combining everything
interface BaseUser {
    id: number;
    name: string;
}

interface AdvancedUser extends BaseUser {
    email?: string;
}

class Admin implements AdvancedUser {
    id: number;
    name: string;
    email?: string;

    constructor(id: number, name: string, email?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}