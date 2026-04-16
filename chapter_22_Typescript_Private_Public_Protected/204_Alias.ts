let rawResponse : unknown = {
    status: 200,
    body: {user: "admin", role: "tester"}
};

interface UserResponse {
    status: number;
    body: { user: string; role: string };
}

let response = rawResponse as UserResponse;
console.log ("Response: ", response);
console.log ("User: ", response.body.user);
console.log ("Role: ", response.body.role);