let envName = "staging";
let config;
const devConfig = {
    baseURL: `https://${envName}-api.testingacademy.com`,
    apiKey: `devKey`,
    timeout: 5000,
    description: "Development - Internal testing environment"
};

const stagingConfig = {
    baseURL: `https://${envName}-api.testingacademy.com`,
    apiKey: `stgKey`,
    timeout: 6000,
    description: "Staging - Pre-production mirror"
};

const qaConfig = {
    baseURL: `https://${envName}-api.testingacademy.com`,
    apiKey: `qaKey`,
    timeout: 7000,
    description: "QA - Quality Assurance environment"
};  

const prodConfig = {
    baseURL: `https://${envName}-api.testingacademy.com`,
    apiKey: `prodKey`,
    timeout: 10000,
    description: "Production - Live environment"
};  

switch (envName) {
    case "dev":
        config = devConfig;
        break;
    case "staging":
        config = stagingConfig;
        break;
    case "qa":
        config = qaConfig;
        break;
    case "production":
    case "prod":
        config = prodConfig;
        break;
    default:
        console.log("Invalid environment name. Please use dev, staging, qa, or production.");
}

console.log (`Environment: ${envName}`);
console.log (`Base URL: ${config.baseURL}`);
console.log (`API Key: ${config.apiKey}_xxxx_xxxx`);
console.log (`Timeout: ${config.timeout} ms`);
console.log (`Description: ${config.description}`);