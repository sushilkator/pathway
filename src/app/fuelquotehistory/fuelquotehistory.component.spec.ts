import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelquotehistoryComponent } from './fuelquotehistory.component';

describe('FuelquotehistoryComponent', () => {
  let component: FuelquotehistoryComponent;
  let fixture: ComponentFixture<FuelquotehistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelquotehistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelquotehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
