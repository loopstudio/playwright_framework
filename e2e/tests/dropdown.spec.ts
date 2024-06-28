import { test, expect } from '@playwright/test';
import { DropdownPage } from '../pages/dropdown.page';


test.describe('Dropdown functionality', () => {
    let dropdownPage: DropdownPage;

    test.beforeEach(async ({ page }) => {
        dropdownPage = new DropdownPage(page);
        await dropdownPage.open(); // Navigate to the Dropdown page
    });

    test('Select option 1 from the dropdown', async ({ page }) => {
        await dropdownPage.selectOptionByValue('1');
        const selectedOption = await dropdownPage.getSelectedOption();
        expect(selectedOption).toBe('Option 1');
    });

    test('Select option 2 from the dropdown', async ({ page }) => {
        await dropdownPage.selectOptionByValue('2');
        const selectedOption = await dropdownPage.getSelectedOption();
        expect(selectedOption).toBe('Option 2');
    });
});
