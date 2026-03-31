import { test, expect } from '@playwright/test';
import { getUsersAPI } from '../../utils/apiHelper';

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
    expect(body.users.length).toBeGreaterThan(0);
    expect(Array.isArray(body.users)).toBe(true);
});

test('API Users - Get Users List', async ({ request }) => {

    const response = await getUsersAPI(request);

    expect(response.status()).toBe(200);

    const body = await response.json();

    // Validate structure
    expect(body.users).toBeDefined();
    expect(Array.isArray(body.users)).toBe(true);

    // Validate data
    expect(body.users.length).toBeGreaterThan(0);

    // Validate first user object
    expect(body.users[0]).toHaveProperty('id');
    expect(body.users[0]).toHaveProperty('name');
});
