import { Component, input, model } from '@angular/core';
import { DxPopoverModule } from 'devextreme-angular';
import { DxPopupModule } from 'devextreme-angular';
import { Button } from '../button/button';

@Component({
  selector: 'app-dialog-form',
  imports: [DxPopoverModule, DxPopupModule, Button],
  templateUrl: './dialog-form.html',
  styleUrl: './dialog-form.scss',
  standalone: true,
})
export class DialogForm {
  title = input<string>('');

  // Two-way binding for popup visibility
  popupVisible = model(false);

  // Handle popup visibility changes
  onVisibleChange(visible: boolean): void {
    this.popupVisible.set(visible);
  }
}
