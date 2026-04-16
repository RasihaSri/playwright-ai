class PlaywrightConfig {
    readonly baseURL: string;
    readonly timeout: number;
    readonly retries: number;

    constructor(url: string, timeout: number, retries: number) {
        this.baseURL = url;
        this.timeout = timeout;
        this.retries = retries;
    }

    showConfig(): void {
        console.log(`URL: ${this.baseURL}`);
        console.log(`Timeout: ${this.timeout}ms`);
        console.log(`Retries: ${this.retries}`);
    }
}

let config = new PlaywrightConfig("https://app.staging.com", 30000, 2);
config.showConfig();

// config.baseURL = "https://app.production.com"; // Error: Cannot assign to 'baseURL' because it is a read-only property.