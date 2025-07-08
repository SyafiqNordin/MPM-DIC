import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar.component';
import { Header } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [Sidebar, Header, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
