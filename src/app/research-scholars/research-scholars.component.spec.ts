import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchScholarsComponent } from './research-scholars.component';

describe('ResearchScholarsComponent', () => {
  let component: ResearchScholarsComponent;
  let fixture: ComponentFixture<ResearchScholarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchScholarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchScholarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
