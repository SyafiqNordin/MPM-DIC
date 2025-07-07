import { Component, input, output } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [DxButtonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  stylingMode = input<'contained' | 'outlined' | 'text'>('contained');
  text = input<string>('');
  width = input<string | number>();
  height = input<string | number>();
  icon = input<string>('');
  hoverStateEnabled = input<boolean>(false);
  disabled = input<boolean>(false);
  customButton = input<string>('');
  buttonClick = output<void>();

  clickevent() {
    this.buttonClick.emit();
  }
}
