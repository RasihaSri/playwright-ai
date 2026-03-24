// @ts-check
import { defineConfig } from '@playwright/test';
import { resolve } from 'path';

export default defineConfig({
  testDir: './stlc_project/tests',
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
    ['html', { outputFolder: resolve(__dirname, 'stlc_project/reports/html-report'), open: 'never' }],
    ['json', { outputFile: resolve(__dirname, 'stlc_project/reports/results.json') }],
    ['./stlc_project/reporters/CustomTTAReporter.js'],
  ],
});
