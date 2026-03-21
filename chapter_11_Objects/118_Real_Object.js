const ENV = {
    BASE_URL: "https://staging.myapp.com",
    TIMEOUT: 5000,
    RETRIES: 3,
    BROWSERS: "Chrome"
}

const EXPECTED_RESPONSE = {
    status: 200,
    body: {
        user: {role: "admin", active: true }
    }
}