import { Component, signal, input } from '@angular/core';
import dummyData from '../../../assets/data/dummy.json';
import {
  DxBulletModule,
  DxTemplateModule,
  DxDataGridModule,
  DxNumberBoxModule,
  DxButtonModule,
  DxSelectBoxModule,
} from 'devextreme-angular';
import { ValueChangedEvent as NumberBoxValueChangedEvent } from 'devextreme/ui/number_box';
import { ValueChangedEvent as SelectBoxValueChangedEvent } from 'devextreme/ui/select_box';

@Component({
  selector: 'app-data-grid',
  imports: [
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
    DxNumberBoxModule,
    DxButtonModule,
    DxSelectBoxModule,
  ],
  templateUrl: './data-grid.html',
  styleUrl: './data-grid.scss',
})
export class DataGridComponent {
  pageSize = signal(10);
  currentPage = signal(0);

  allowedPageSizes = [10, 25, 50, 100];
  dataSource = dummyData;

  customGrid = input<string>('');

  // 🔹 Total number of items
  get totalItems(): number {
    return this.dataSource.length;
  }

  // 🔹 Total number of pages
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize());
  }

  // 🔹 Start index of current page
  get pageStartIndex(): number {
    return this.currentPage() * this.pageSize();
  }

  // 🔹 End index of current page
  get pageEndIndex(): number {
    return Math.min(this.pageStartIndex + this.pageSize(), this.totalItems);
  }

  // 🔹 Paged data for the grid
  get pagedData(): any[] {
    return this.dataSource.slice(this.pageStartIndex, this.pageEndIndex);
  }

  // ✅ This handles page size dropdown (dx-select-box)
  onPageSizeChange(e: SelectBoxValueChangedEvent): void {
    this.pageSize.set(e.value);
    this.currentPage.set(0);
  }

  goToPage(e: NumberBoxValueChangedEvent): void {
    const page = e.value - 1;
    if (page >= 0 && page < this.totalPages) {
      this.currentPage.set(page);
    }
  }

  // 🔹 Navigation buttons
  goToFirstPage(): void {
    this.currentPage.set(0);
  }

  goToPreviousPage(): void {
    if (this.currentPage() > 0) {
      this.currentPage.set(this.currentPage() - 1);
    }
  }

  goToNextPage(): void {
    if (this.currentPage() < this.totalPages - 1) {
      this.currentPage.set(this.currentPage() + 1);
    }
  }

  goToLastPage(): void {
    this.currentPage.set(this.totalPages - 1);
  }

  // Optional: Customize bullet chart tooltip
  customizeTooltip(info: any) {
    return {
      text: `${info.valueText}%`,
    };
  }

  contentReady(e: any) {
    if (e.component.totalCount() === 0) {
      e.component.option('loadPanel.enabled', false);
    }
  }

  onActionButtonClick(e: any) {
    e.event.stopPropagation();
    // Add your action button click logic here
    console.log('Action button clicked', e);
  }
}
