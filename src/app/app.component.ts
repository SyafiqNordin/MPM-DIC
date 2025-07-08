import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DxButtonModule } from 'devextreme-angular';
import { DxFormModule } from 'devextreme-angular';
import { MPMFocal } from './modules/mpm-focal/mpm-focal';

//later remove the import button etc use it import on pages that we need it dont declare here

@Component({
  selector: '#app-pace',
  standalone: true,
  imports: [RouterOutlet, DxButtonModule, DxFormModule, MPMFocal],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  protected title = 'MPM-DIC';
}
