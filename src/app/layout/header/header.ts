import { Component, inject } from '@angular/core';
import { DxFormModule } from 'devextreme-angular';
import { DxMenuModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { Button } from '../../shared/button/button';
import { TitleService } from '../../core/services/title.service';

@Component({
  selector: 'app-header',
  imports: [DxFormModule, DxMenuModule, CommonModule, Button],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private titleService = inject(TitleService);
  title = this.titleService.title;
  button = [
    { icon: 'ai-icon' },
    { icon: 'help-icon' },
    { icon: 'bell-icon' },
    { icon: 'menu-icon' },
    { icon: 'profile-icon' },
  ];
}
