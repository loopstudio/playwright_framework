import { BasePage } from './base.page';

export class DropdownPage extends BasePage {
    private url = '/dropdown';
    private dropdownSelector = '#dropdown';

    async open() {
        await this.page.goto(this.url);
    }

    async selectOptionByValue(value: string) {
        await super.selectOptionByValue(this.dropdownSelector, value);
    }

    async getSelectedOption() {
        return super.getSelectedOption(this.dropdownSelector);
    }
}