import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class MultipleWindowsPage extends BasePage {
    private url = '/windows';
    private clickHereLink = 'a[href="/windows/new"]';

    async open() {
        await this.page.goto(this.url);
    }

    async clickHereAndOpenNewWindow(): Promise<Page> {
        return this.clickAndWaitForNewWindow(this.clickHereLink);
    }
}
