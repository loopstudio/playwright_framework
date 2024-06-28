import { BasePage } from './base.page';

export class DragAndDropPage extends BasePage {
    private url = '/drag_and_drop';
    public columnA = '#column-a';
    public columnB = '#column-b';

    async open() {
        await this.page.goto(this.url);
    }

    async dragColumnAToColumnB() {
        await super.dragAndDrop(this.columnA, this.columnB);
    }

    async getColumnText(selector: string): Promise<string | null> {
        return super.getTextOfElement(selector);
    }
}

