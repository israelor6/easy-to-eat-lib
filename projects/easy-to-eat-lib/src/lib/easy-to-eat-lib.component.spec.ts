import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyToEatLibComponent } from './easy-to-eat-lib.component';

describe('EasyToEatLibComponent', () => {
  let component: EasyToEatLibComponent;
  let fixture: ComponentFixture<EasyToEatLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyToEatLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyToEatLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
