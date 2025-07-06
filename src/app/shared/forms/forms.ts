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

export interface FormField {
  type: 'text' | 'select' | 'textarea' | 'date' | 'accordion';
  label: string;
  name: string;
  value?: any;
  placeholder?: string;
  options?: Array<{ value: any; text: string }>;
  required?: boolean;
  maxLength?: number;
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
  ],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class Forms {
  maintitle = input<string>('Form Title');
  fields = input<FormField[]>([]);
  currentText = signal<string>('');

  onTextChange(e: any) {
    this.currentText.set(e.event?.target?.value || '');
  }
}
