import { APIRequestContext } from '@playwright/test';

// 🔹 Login API
export async function loginAPI(
    request: APIRequestContext,
    username: string,
    password: string
) {
    return await request.post('/api/login', {
        data: {
            username,
            password
        }
    });
}

// 🔹 Get Users API
export async function getUsersAPI(request: APIRequestContext) {
    return await request.get('/api/users');
}