// layout/shell/shell.component.ts
import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [Sidebar, Header, RouterOutlet],
  template: `
    <div class="app-layout">
      <app-sidebar class="sidebar"></app-sidebar>
      <div class="main">
        <app-header></app-header>
        <div class="content">
          <router-outlet />
        </div>
      </div>
    </div>
  `,
  styleUrl: './shell.scss',
})
export class ShellComponent {}
