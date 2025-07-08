import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedProject } from './linked-project';

describe('LinkedProject', () => {
  let component: LinkedProject;
  let fixture: ComponentFixture<LinkedProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
