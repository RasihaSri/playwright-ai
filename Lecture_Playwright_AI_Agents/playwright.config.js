// @ts-check
import { defineConfig } from '@playwright/test';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  testDir: './agents_project/tests',
  timeout: 30000,
  retries: 0, // No retries - we want to capture intentional failures
  workers: 1, // Run sequentially for clear output

  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },

  reporter: [
    ['html', { outputFolder: resolve(__dirname, 'agents_project/reports/html-report'), open: 'never' }],
    ['json', { outputFile: resolve(__dirname, 'agents_project/reports/results.json') }],
    ['./agents_project/reporters/CustomTTAReporter.js'],
  ],
});
