import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdComponent } from './phd.component';

describe('PhdComponent', () => {
  let component: PhdComponent;
  let fixture: ComponentFixture<PhdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
