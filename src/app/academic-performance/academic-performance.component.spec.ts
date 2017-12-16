import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicPerformanceComponent } from './academic-performance.component';

describe('AcademicPerformanceComponent', () => {
  let component: AcademicPerformanceComponent;
  let fixture: ComponentFixture<AcademicPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
