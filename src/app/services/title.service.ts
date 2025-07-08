import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private titleSignal = signal('MPM Digital Intelligence Centre');

  //readonly title means it can't be changed by other components
  readonly title = this.titleSignal.asReadonly();

  setTitle(newTitle: string): void {
    this.titleSignal.set(newTitle.trim());
  }

  //   resetTitle(): void {
  //     this.titleSignal.set('MPM Digital Intelligence Centre');
  //   }
}
