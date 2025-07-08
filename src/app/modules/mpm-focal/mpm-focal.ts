import { Component, inject, signal } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { Button } from '../../shared/components/button/button.component';
import {
  Forms,
  FormField,
} from '../../shared/components/forms/forms.component';
import { DialogForm } from '../../shared/components/dialog-form/dialog-form.component';
import { CommonModule } from '@angular/common';
import { Stepper } from '../../shared/components/stepper/stepper.component';
import dummyform from '../../../assets/data/form-fields.json';

// type DialogType = 'add' | 'cancel' | null;

//declare the form fields interface as json
interface FormFieldsJson {
  fields: FormField[];
}
@Component({
  selector: 'app-mpm-focal',
  standalone: true,
  imports: [CommonModule, Button, Forms, DialogForm, Stepper],
  templateUrl: './mpm-focal.html',
  styleUrl: './mpm-focal.scss',
})
export class MPMFocal {
  private titleService = inject(TitleService);

  constructor() {
    this.titleService.setTitle(
      'Create New Project (Deepwater Exploration Block PM-1)'
    );
  }
  currentStepIndex = signal(0);
  fields: FormField[] = (dummyform as FormFieldsJson).fields;

  // isDialogVisible = false;
  // currentDialog: DialogType = null;
  // dialogTitle = '';

  // onAddButtonClick(): void {
  //   console.log('Add button clicked');
  //   this.currentDialog = 'add';
  //   this.dialogTitle = 'Add New Project';
  //   this.isDialogVisible = true;
  // }

  // onStepChange(itemIndex: number): void {
  //   this.currentStepIndex.set(itemIndex);
  // }

  // onCancelButtonClick(): void {
  //   console.log('Cancel button clicked');
  //   this.currentDialog = 'cancel';
  //   this.dialogTitle = 'Cancel Project Creation?';
  //   this.isDialogVisible = true;
  // }

  // onDialogVisibleChange(visible: boolean): void {
  //   this.isDialogVisible = visible;
  //   if (!visible) {
  //     this.currentDialog = null;
  //   }
  // }

  // // Helper method to check which dialog content to show
  // isDialogType(type: DialogType): boolean {
  //   return this.currentDialog === type && this.isDialogVisible;
  // }
}
