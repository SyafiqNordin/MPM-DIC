import { Component, signal } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { Forms, FormField } from '../../../shared/forms/forms';
import { DialogForm } from '../../../shared/dialog-form/dialog-form';
import { CommonModule } from '@angular/common';
import { Stepper } from '../../../shared/stepper/stepper';

type DialogType = 'add' | 'cancel' | null;

@Component({
  selector: 'app-mpm-focal',
  standalone: true,
  imports: [CommonModule, Button, Forms, DialogForm, Stepper],
  templateUrl: './mpm-focal.html',
  styleUrl: './mpm-focal.scss',
})
export class MPMFocal {
  currentStepIndex = signal(0);
  fields: FormField[] = [
    {
      type: 'text',
      label: 'Project Name',
      name: 'projectName',
    },
    {
      type: 'text',
      label: 'Project Short Name',
      name: 'projectShortName',
      placeholder: 'A short name/code for this project, e.g., PM1-DEEP',
    },
    {
      type: 'select',
      label: 'Project Type',
      name: 'projectType',
      options: [
        { value: 'type1', text: 'Type 1' },
        { value: 'type2', text: 'Type 2' },
      ],
    },
    {
      type: 'textarea',
      label: 'Project Description/Objective',
      name: 'projectDescription',
      placeholder:
        'Enter a short summary of the project purpose and expected outcome',
      maxLength: 1000,
    },
  ];

  isDialogVisible = false;
  currentDialog: DialogType = null;
  dialogTitle = '';

  onAddButtonClick(): void {
    console.log('Add button clicked');
    this.currentDialog = 'add';
    this.dialogTitle = 'Add New Project';
    this.isDialogVisible = true;
  }

  onStepChange(itemIndex: number): void {
    this.currentStepIndex.set(itemIndex);
  }

  onCancelButtonClick(): void {
    console.log('Cancel button clicked');
    this.currentDialog = 'cancel';
    this.dialogTitle = 'Cancel';
    this.isDialogVisible = true;
  }

  onDialogVisibleChange(visible: boolean): void {
    this.isDialogVisible = visible;
    if (!visible) {
      this.currentDialog = null;
    }
  }

  // Helper method to check which dialog content to show
  isDialogType(type: DialogType): boolean {
    return this.currentDialog === type && this.isDialogVisible;
  }
}
