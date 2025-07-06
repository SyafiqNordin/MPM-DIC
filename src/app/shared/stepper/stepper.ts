import {
  Component,
  input,
  InputSignal,
  Output,
  EventEmitter,
} from '@angular/core';

export interface StepperItemClickEvent {
  itemIndex: number;
}

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
  @Output() onItemClick = new EventEmitter<StepperItemClickEvent>();
  selectedIndex: InputSignal<number> = input(0);
  steps = input<Array<{ icon: string; label: string }>>([
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
  ]);
  getSteps(): DxStepperTypes.Item[] {
    return this.steps();
  }
  // Note: Since selectedIndex is an InputSignal, we can't modify it directly
  // The parent component should handle the index changes
  handleItemClick(e: { itemIndex: number }) {
    this.onItemClick.emit({ itemIndex: e.itemIndex });
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
