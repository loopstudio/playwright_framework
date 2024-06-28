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

    async getSelectedOption(selector: string): Promise<string> {
        return this.page.$eval(selector, (dropdown) => {
            const selectElement = dropdown as HTMLSelectElement;
            return selectElement.options[selectElement.selectedIndex].text;
        });
    }

    async dragAndDrop(source: string, target: string) {
        await this.page.dragAndDrop(source, target);
    }

    async getTextOfElement(selector: string): Promise<string | null> {
        return this.page.textContent(selector);
    }

    async clickAndWaitForNewWindow(selector: string): Promise<Page> {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.page.click(selector),
        ]);
        await newPage.waitForLoadState();
        return newPage;
    }

    async switchToWindow(page: Page) {
        await page.bringToFront();
    }
}
