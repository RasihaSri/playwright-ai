class TestDataStorage<T> {
    private items: T[] = [];

    addItem(item: T) : void{
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0];
    }

    getAll(): T[] {
        return this.items;
    }

    count(): number {
        return this.items.length;
    }
}

let codeStore = new TestDataStorage<number>();
let testStore = new TestDataStorage<string>();

codeStore.addItem(200);
codeStore.addItem(404);
codeStore.addItem(500);

testStore.addItem("Login Test");
testStore.addItem("Checkout");

console.log("First code: ", codeStore.getFirst()); // Output: 200
console.log("All codes: ", codeStore.getAll()); // Output: [200, 404, 500]
console.log("Code count: ", codeStore.count()); // Output: 3
console.log("Tests: ", testStore.getAll()); // Output: ["Login Test", "Checkout"]