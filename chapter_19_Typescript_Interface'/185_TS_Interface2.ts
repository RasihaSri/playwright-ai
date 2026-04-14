// Interface with optional and readonly for API response
interface APIResponse {
    readonly statusCode: number;
    body: string;
    headers?: Object; // Optional property
    responseTime?: number; // Optional property
}

// Readonly - can't modify the readonly
// ? - optional

let response: APIResponse = {
    statusCode: 200,
    body: '{"user": "admin"}',
};

console.log ("Status: ", response.statusCode);
console.log ("Body: ", response.body);
console.log ("Headers: ", response.headers); // undefined

console.log("-----------------");

interface Point {
    readonly x: number;
    readonly y: number;
}

const point: Point = { x: 10, y: 20 };
// point.x = 15; // Error: Cannot assign to 'x' because it is a read-only property.
console.log("Point: ", point.x, point.y);

// Readonly array
interface Data {
    readonly items: readonly number [];
}