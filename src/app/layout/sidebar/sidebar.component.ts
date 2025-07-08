import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxMenuModule } from 'devextreme-angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, DxMenuModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class Sidebar {
  products = [
    { icon: 'petronas-icon' },
    { icon: 'system-icon' },
    { icon: 'product-icon' },
    { icon: 'user-icon' },
    { icon: 'file-icon' },
  ];
}
