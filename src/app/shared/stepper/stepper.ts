import { Component } from '@angular/core';
import { DxStepperModule } from 'devextreme-angular';
import { type DxStepperTypes } from 'devextreme-angular/ui/stepper';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [DxStepperModule, NgFor],
  templateUrl: './stepper.html',
  styleUrl: './stepper.scss',
})
export class Stepper {
  steps: Array<{ icon: string; label: string }>;
  selectedIndex: number = 0;

  constructor() {
    this.steps = [
      {
        icon: 'check',
        label: 'General Information',
      },
      {
        icon: 'check',
        label: 'PSC/PAC Information',
      },
      {
        icon: 'check',
        label: 'Linked Project(s)',
      },
      {
        icon: 'check',
        label: 'MPM Project Team',
      },
      {
        icon: 'check',
        label: 'Preview & Create Project',
      },
    ];
  }
  getSteps(): DxStepperTypes.Item[] {
    return this.steps;
  }
  onItemClick(e: any) {
    this.selectedIndex = e.itemIndex;
  }
  // steps = this.stepperService.getSteps();
  // steps = [
  //   { label: 'Personal Details', template: 'starTemplate' },
  //   { label: 'Program Selection' },
  //   { label: 'Campus and Start Dates' },
  //   { label: 'Supporting Documents' },
  //   { label: 'Scholarship and Aid', optional: true },
  //   { label: 'Review and Submit' },
  // ];
}
