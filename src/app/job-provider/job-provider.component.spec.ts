import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobProviderComponent } from './job-provider.component';

describe('JobProviderComponent', () => {
  let component: JobProviderComponent;
  let fixture: ComponentFixture<JobProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
