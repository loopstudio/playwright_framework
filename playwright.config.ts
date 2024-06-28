import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        baseURL: 'http://the-internet.herokuapp.com',
        browserName: 'chromium',
        headless: false,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure',
    },
    timeout: 60000,
    reporter: [['list'], ['json', { outputFile: 'test-results.json' }]],
});