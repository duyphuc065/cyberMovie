import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingTicketTypeComponent } from './booking-ticket-type.component';

describe('BookingTicketTypeComponent', () => {
  let component: BookingTicketTypeComponent;
  type NewType = BookingTicketTypeComponent;

  let fixture: ComponentFixture<NewType>;

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
