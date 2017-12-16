import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalActivitiesComponent } from './professional-activities.component';

describe('ProfessionalActivitiesComponent', () => {
  let component: ProfessionalActivitiesComponent;
  let fixture: ComponentFixture<ProfessionalActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
