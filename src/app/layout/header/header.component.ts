import { Component, inject } from '@angular/core';
import { DxFormModule } from 'devextreme-angular';
import { DxMenuModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { Button } from '../../shared/components/button/button.component';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-header',
  imports: [DxFormModule, DxMenuModule, CommonModule, Button],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
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
