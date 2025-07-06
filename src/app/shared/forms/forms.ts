import { Component, input, signal, computed } from '@angular/core';
import { DxFormModule } from 'devextreme-angular';
import { DxDateBoxModule } from 'devextreme-angular';
import { DxSelectBoxModule } from 'devextreme-angular';
import { DxTextAreaModule } from 'devextreme-angular';
import { DxTextBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    DxFormModule,
    DxDateBoxModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxTextBoxModule,
  ],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class Forms {
  maintitle = input<string>('General Information');
  title = input<string>('Project Name');
  title2 = input<string>('Project Short Name');
  title3 = input<string>('Project Type');
  title4 = input<string>('Project Description/Objective');
  title2placeholder = input<string>(
    'A short name/code for this project, e.g., PM1-DEEP'
  );
  title3placeholder = input<string>('Select');
  title4placeholder = input<string>(
    'Enter a short summary of the project purpose and expected outcome'
  );
  maxLength = input<number>(1000);
  currentText = signal<string>('');
  remainingChars = computed(() => this.maxLength() - this.currentText().length);

  onTextChange(e: any) {
    this.currentText.set(e.event?.target?.value || '');
  }
}
