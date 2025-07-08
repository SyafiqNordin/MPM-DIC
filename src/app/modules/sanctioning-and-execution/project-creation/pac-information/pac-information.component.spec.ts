import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacInfo } from './pac-information.component';

describe('PacInfo', () => {
  let component: PacInfo;
  let fixture: ComponentFixture<PacInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(PacInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
