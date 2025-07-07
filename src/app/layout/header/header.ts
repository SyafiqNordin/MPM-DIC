import { Component, input } from '@angular/core';
import { DxFormModule } from 'devextreme-angular';
import { DxMenuModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-header',
  imports: [DxFormModule, DxMenuModule, CommonModule, Button],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  title = input<string>('');
  button = [
    { icon: 'ai-icon' },
    { icon: 'help-icon' },
    { icon: 'bell-icon' },
    { icon: 'menu-icon' },
    { icon: 'profile-icon' },
  ];
}
