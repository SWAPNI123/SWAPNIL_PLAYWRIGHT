// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    headless: true,  // Run tests in headless mode
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
  },
});
