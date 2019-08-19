import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTicketTypeComponent } from './booking-ticket-type.component';

describe('BookingTicketTypeComponent', () => {
  let component: BookingTicketTypeComponent;
  let fixture: ComponentFixture<BookingTicketTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingTicketTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingTicketTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
