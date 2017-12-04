import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoPsoComponent } from './peo-pso.component';

describe('PeoPsoComponent', () => {
  let component: PeoPsoComponent;
  let fixture: ComponentFixture<PeoPsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoPsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoPsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
