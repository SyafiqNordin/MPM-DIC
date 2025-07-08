import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PACFocal } from './pac-focal.component';

describe('PACFocal', () => {
  let component: PACFocal;
  let fixture: ComponentFixture<PACFocal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PACFocal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PACFocal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
