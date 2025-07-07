import { Component, signal, inject } from '@angular/core';
import { TitleService } from '../../../../core/services/title.service';
import { Button } from '../../../../shared/button/button';
import { Forms, FormField } from '../../../../shared/forms/forms';
import { DialogForm } from '../../../../shared/dialog-form/dialog-form';
import { CommonModule } from '@angular/common';
import { Stepper } from '../../../../shared/stepper/stepper';
import { AppAccordionComponent } from '../../../../shared/accordian/accordian';
import { DxAccordionModule } from 'devextreme-angular/ui/accordion';

type DialogType = 'add' | 'cancel' | null;

@Component({
  selector: 'app-pac-info',
  standalone: true,
  imports: [
    CommonModule,
    Button,
    Forms,
    DialogForm,
    Stepper,
    AppAccordionComponent,
    DxAccordionModule,
  ],
  templateUrl: './pac-info.html',
  styleUrl: './pac-info.scss',
})
export class PacInfo {
  private titleService = inject(TitleService);

  constructor() {
    this.titleService.setTitle(
      'Create New Project (Deepwater Exploration Block PM-1)'
    );
  }
  currentStepIndex = signal(1);
  fields: FormField[] = [
    {
      type: 'select',
      label: 'Petroleum Arrangement Contract',
      name: 'projectType',
      placeholder: 'Select PAC',
      options: [
        { value: 'type1', text: 'Type 1' },
        { value: 'type2', text: 'Type 2' },
      ],
    },
    {
      type: 'select',
      label: 'Field',
      name: 'projectType',
      placeholder: 'Select Field',
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
  pacDetailsFields: FormField[] = [
    {
      type: 'text',
      label: 'Region',
      name: 'region',
      placeholder: 'Enter Region',
    },
    {
      type: 'text',
      label: 'Block',
      name: 'block',
      placeholder: 'Enter Block',
    },
    {
      type: 'text',
      label: 'Operator Name',
      name: 'operatorName',
      placeholder: 'Enter Operator Name',
    },
    {
      type: 'text',
      label: 'PSC Type',
      name: 'pscType',
      placeholder: 'Enter PSC Type',
    },
    {
      type: 'text',
      label: 'PSC Category',
      name: 'pscCategory',
      placeholder: 'Enter PSC Category',
    },
    {
      type: 'text',
      label: 'Operatorship',
      name: 'operatorship',
      placeholder: 'Enter Operatorship',
    },
    {
      type: 'text',
      label: 'PSC Start Date',
      name: 'pscStartDate',
      placeholder: 'Enter PSC Start Date',
    },
    {
      type: 'text',
      label: 'PSC End Date',
      name: 'pscEndDate',
      placeholder: 'Enter PSC End Date',
    },
  ];
  projectTeamFields: FormField[] = [
    {
      type: 'label',
      labelname: 'Pac Project Team',
      name: 'projectTeam',
      placeholder: 'Enter Name',
    },
    {
      type: 'table',
      name: 'projectTeam',
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

  onStepChange(itemIndex: number): void {
    this.currentStepIndex.set(itemIndex);
  }
}
