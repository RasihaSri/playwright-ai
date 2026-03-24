import { test, expect } from '@playwright/test';

test('API Login Test', async ({ request }) => {
    const response = await request.post('/api/login', {
        data: {
            username: 'admin',
            password: 'admin123'
        }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.token).toBeDefined();
});


// Write API test:

// 👉 Endpoint: /api/users

// Send GET request
// Verify status = 200
// Verify response contains users

test('API Users Test', async ({ request }) => {
    const response = await request.get('/api/users');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.users).toBeDefined();
    expect(Array.isArray(body.users)).toBe(true);
});