function wrapResponse<T> (statusCode: number, data: T) {
    return { statusCode: statusCode, data: data };
}

let userResp = wrapResponse<string> (200, "admin");
console.log(userResp); // Output: { statusCode: 200, data: "admin" }

let flagResp = wrapResponse(404, false);
console.log(flagResp); // Output: { statusCode: 404, data: false }

let countResp = wrapResponse<number> (200, 42);
console.log(countResp); // Output: { statusCode: 200, data: 42 }

