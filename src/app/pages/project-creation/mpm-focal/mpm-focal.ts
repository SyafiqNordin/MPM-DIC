import { Component } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { Forms } from '../../../shared/forms/forms';
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
  isDialogVisible = false;
  currentDialog: DialogType = null;
  dialogTitle = '';

  onAddButtonClick(): void {
    console.log('Add button clicked');
    this.currentDialog = 'add';
    this.dialogTitle = 'Add New Project';
    this.isDialogVisible = true;
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
