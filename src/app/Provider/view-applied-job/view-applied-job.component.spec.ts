import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppliedJobComponent } from './view-applied-job.component';

describe('ViewAppliedJobComponent', () => {
  let component: ViewAppliedJobComponent;
  let fixture: ComponentFixture<ViewAppliedJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppliedJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppliedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
