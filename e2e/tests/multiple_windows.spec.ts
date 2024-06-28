import { test, expect, Page } from '@playwright/test';
import { MultipleWindowsPage } from '../pages/multiple_windows.page';

test.describe('Multiple Windows functionality', () => {
    let multipleWindowsPage: MultipleWindowsPage;
    let newPage: Page;

    test.beforeEach(async ({ page }) => {
        multipleWindowsPage = new MultipleWindowsPage(page);
        await multipleWindowsPage.open(); // Navigate to the Multiple Windows page
    });

    test('Open new window and verify content', async ({ page }) => {
        newPage = await multipleWindowsPage.clickHereAndOpenNewWindow();
        await multipleWindowsPage.switchToWindow(newPage);
        expect(await newPage.textContent('h3')).toBe('New Window');
    });
});
