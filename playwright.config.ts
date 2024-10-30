import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 2,
  reporter: [['html', { outputFolder: 'reports', open: 'never' }]],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 5000,
    baseURL: 'http://localhost:3000', // Adjust if needed
  },
});
