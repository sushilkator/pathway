import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelQuoteFormComponent } from './fuel-quote-form.component';

describe('FuelQuoteFormComponent', () => {
  let component: FuelQuoteFormComponent;
  let fixture: ComponentFixture<FuelQuoteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelQuoteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelQuoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
