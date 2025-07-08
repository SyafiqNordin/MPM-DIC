import { Component, input } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { DxAccordionModule } from 'devextreme-angular/ui/accordion';
import { CommonModule } from '@angular/common';
import { DxFormModule } from 'devextreme-angular/ui/form';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordian.component.html',
  imports: [DxAccordionModule, CommonModule, DxFormModule],
  styleUrl: './accordian.component.scss',
  standalone: true,
})
export class AppAccordionComponent {
  items = input<{ title: string; contentTemplate: TemplateRef<any> }[]>([]);
  collapsible = input(true);
  multiple = input(false);
}
