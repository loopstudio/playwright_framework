import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import * as config from '../../config.json';

test.describe('Login functionality', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.open();
    });

    test('Login with valid credentials', async ({ page }) => {

        const { username, password } = config;

        await loginPage.enterUsername(username);
        await loginPage.enterPassword(password);
        await loginPage.clickLoginButton();
        expect(await page.isVisible('.flash.success')).toBeTruthy();
    });

    test('Login with invalid credentials', async ({ page }) => {
        await loginPage.enterUsername('invalidUser');
        await loginPage.enterPassword('invalidPassword');
        await loginPage.clickLoginButton();
        expect(await loginPage.isErrorVisible()).toBeTruthy();
    });
});