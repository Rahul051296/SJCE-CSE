import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyMentorsComponent } from './faculty-mentors.component';

describe('FacultyMentorsComponent', () => {
  let component: FacultyMentorsComponent;
  let fixture: ComponentFixture<FacultyMentorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyMentorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
