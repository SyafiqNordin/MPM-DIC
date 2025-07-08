import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInformation } from './general-information.component';

describe('GeneralInfo', () => {
  let component: GeneralInformation;
  let fixture: ComponentFixture<GeneralInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralInformation],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
