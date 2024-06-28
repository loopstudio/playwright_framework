import { Page } from '@playwright/test';

export class BasePage {
    constructor(protected page: Page) {}

    async open(url: string) {
        await this.page.goto(url);
    }

    async click(selector: string) {
        await this.page.click(selector);
    }

    async type(selector: string, text: string) {
        await this.page.fill(selector, text);
    }

    async isVisible(selector: string) {
        return this.page.isVisible(selector);
    }

    async selectOptionByValue(selector: string, value: string) {
        await this.page.selectOption(selector, { value });
    }

    async getSelectedOption(selector: string) {
        const selectedOption = await this.page.$eval(selector, (dropdown) => {
            const selectElement = dropdown as HTMLSelectElement;
            return selectElement.options[selectElement.selectedIndex].text;
        });
        return selectedOption;
    }
}
