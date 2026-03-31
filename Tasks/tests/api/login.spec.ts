import { test, expect } from '@playwright/test';
import { loginAPI } from '../../utils/apiHelper';

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


// Scenario

// When user logs in:

// 👉 API: /api/login

// Task:
// 1. Intercept request
// 2. Log:
// Request payload
// Response
// 3. Continue request

test('API Login Intercept Test', async ({ page }) => {
    await page.route('/api/login', async (route) => {
        const request = route.request();
        const postData = request.postData();
        console.log('Request Payload:', postData);

        // Continue request and capture response
        const response = await route.fetch();
        const responseBody = await response.json();
        console.log('Response:', responseBody);
        await route.fulfill({
            response
        });
    });

    await page.goto('/login');

    await page.getByPlaceholder('Username').fill('admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
});


// Mock failure:

// 👉 Return:

// {
//   "error": "Invalid credentials"
// }

// 👉 Verify UI shows error message

test('API Mock Failure Test', async ({ page }) => {
    await page.route('**/api/login', async (route) => {
        await route.fulfill({
            status: 401,
            contentType: 'application/json',
            body: JSON.stringify({ error: 'Invalid credentials' }),
        });
    });

    await page.goto('/login');

    await page.getByPlaceholder('Username').fill('wronguser');
    await page.getByPlaceholder('Password').fill('wrongpass');
    await page.getByRole('button', { name: 'Login' }).click();
    const errorMessage = await page.textContent('#errorMessage');

    await expect(page.getByText('Invalid credentials')).toBeVisible();
});


test('API Login - Valid Credentials', async ({ request }) => {

    const response = await loginAPI(request, 'admin', 'admin123');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.token).toBeDefined();
    expect(body.user).toBe('admin');
});

test('API Login - Invalid Credentials', async ({ request }) => {

    const response = await loginAPI(request, 'wronguser', 'wrongpass');

    expect(response.status()).toBe(401);

    const body = await response.json();

    expect(body.error).toBe('Invalid credentials');
});