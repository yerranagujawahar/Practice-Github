// example.spec.js
const { test, expect } = require('@playwright/test');
test.describe('Basic test cases', () => {
test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('file:///C:/Users/yerrreddy/Desktop/Practice%20Github/Practice-Github/Src/Index.html');
});
test('1st test case', async ({ page }) => {
    expect(page.url()).toBe('file:///C:/Users/yerrreddy/Desktop/Practice%20Github/Practice-Github/Src/Index.html');
});
});