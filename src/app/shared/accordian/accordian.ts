import { Component, input, signal, computed } from '@angular/core';
import { DxAccordionModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';

export interface AccordionItem {
  title: string;
  isExpanded?: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, DxAccordionModule],
  templateUrl: './accordian.html',
  styleUrl: './accordian.scss',
})
export class AccordionComponent {
  items = input<AccordionItem[]>([]);
  collapsible = input<boolean>(true);
  multiple = input<boolean>(false);
  animationDuration = input<number>(300);
  selectedIndex = input<number | number[]>(0);

  // Track expanded state
  expandedItems = signal<Set<number>>(new Set());

  // Convert selectedIndex to array for dx-accordion
  selectedItems = computed(() => {
    const index = this.selectedIndex();
    return Array.isArray(index) ? index : [index];
  });

  toggleItem(index: number): void {
    const currentExpanded = new Set(this.expandedItems());

    if (this.multiple()) {
      if (currentExpanded.has(index)) {
        currentExpanded.delete(index);
      } else {
        currentExpanded.add(index);
      }
    } else {
      currentExpanded.clear();
      currentExpanded.add(index);
    }

    this.expandedItems.set(currentExpanded);
  }

  isItemExpanded(index: number): boolean {
    return this.expandedItems().has(index);
  }

  onItemClick(e: any): void {
    const index = e.itemIndex;
    if (this.items()[index]?.disabled) {
      e.event?.preventDefault();
    }
  }
}
