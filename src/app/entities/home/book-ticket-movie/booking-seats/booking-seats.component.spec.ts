import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSeatsComponent } from './booking-seats.component';

describe('BookingSeatsComponent', () => {
  let component: BookingSeatsComponent;
  let fixture: ComponentFixture<BookingSeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingSeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
