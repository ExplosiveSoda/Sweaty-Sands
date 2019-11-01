import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtmsComponent } from './ltms.component';

describe('LtmsComponent', () => {
  let component: LtmsComponent;
  let fixture: ComponentFixture<LtmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
