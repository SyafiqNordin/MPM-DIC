import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPMFocal } from './mpm-focal';

describe('MPMFocal', () => {
  let component: MPMFocal;
  let fixture: ComponentFixture<MPMFocal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MPMFocal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MPMFocal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
