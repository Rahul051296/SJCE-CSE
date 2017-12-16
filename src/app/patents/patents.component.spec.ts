import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentsComponent } from './patents.component';

describe('PatentsComponent', () => {
  let component: PatentsComponent;
  let fixture: ComponentFixture<PatentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
