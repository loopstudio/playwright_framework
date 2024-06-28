import { test, expect } from '@playwright/test';
import { DragAndDropPage } from '../pages/drag_and_drop.page';

test.describe('Drag and Drop functionality', () => {
    let dragAndDropPage: DragAndDropPage;

    test.beforeEach(async ({ page }) => {
        dragAndDropPage = new DragAndDropPage(page);
        await dragAndDropPage.open(); // Navigate to the Drag and Drop page
    });

    test('Drag column A to column B', async ({ page }) => {
        await dragAndDropPage.dragColumnAToColumnB();
        const columnAText = await dragAndDropPage.getColumnText(dragAndDropPage.columnA);
        const columnBText = await dragAndDropPage.getColumnText(dragAndDropPage.columnB);
        expect(columnAText).toBe('B');
        expect(columnBText).toBe('A');
    });
});
