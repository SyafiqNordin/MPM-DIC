// forms.ts
import { Component, input } from '@angular/core';
import { DxFormModule } from 'devextreme-angular';
import { DxDateBoxModule } from 'devextreme-angular';
import { DxSelectBoxModule } from 'devextreme-angular';
import { DxTextAreaModule } from 'devextreme-angular';
import { DxTextBoxModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { DxAccordionModule } from 'devextreme-angular';
import { DataGridComponent } from '../data-grid/data-grid.component';

export interface FormField {
  type: 'text' | 'select' | 'textarea' | 'date' | 'label' | 'table';
  label?: string;
  name: string;
  value?: any;
  placeholder?: string;
  options?: Array<{ value: any; text: string }>;
  required?: boolean;
  maxLength?: number;
  //in case you want to show label only use this
  labelname?: string;
}

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    CommonModule,
    DxFormModule,
    DxDateBoxModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxTextBoxModule,
    DxAccordionModule,
    DataGridComponent,
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class Forms {
  customField = input<string>('dx-field');
  customFieldset = input<string>('');
  maintitle = input<string>('');
  fields = input<FormField[]>([]);
  currentText = signal<string>('');

  onTextChange(e: any) {
    this.currentText.set(e.event?.target?.value || '');
  }
}
