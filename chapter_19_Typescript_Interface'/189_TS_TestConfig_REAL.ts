interface TestConfig {
    browser: string;
    headless: boolean;
    timeout?: number;
    retries?: number;
    baseURL: string;
}

let ciConfig: TestConfig = {
    browser: "chromium",
    headless: true,
    baseURL: "https://staging.example.com"
};

let localConfig: TestConfig = {
    browser: "Firefox",
    headless: false,
    baseURL: "https://localhost:3000",
    timeout: 10000,
    retries: 3
};

console.log("CI:", ciConfig.browser, "| timeout:", ciConfig.timeout);
console.log("Local:", localConfig.browser, "| timeout:", localConfig.timeout);