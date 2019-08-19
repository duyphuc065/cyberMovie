import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookTicketMovieComponent } from './book-ticket-movie.component';
import { BookingSeatsComponent } from './booking-seats/booking-seats.component';
import { BookingTicketTypeComponent } from './booking-ticket-type/booking-ticket-type.component';
import { TicketStatusHeaderComponent } from './ticket-status-header/ticket-status-header.component';

@NgModule({
  declarations: [
    BookTicketMovieComponent,
    BookingSeatsComponent,
    BookingTicketTypeComponent,
    TicketStatusHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookTicketMovieModule { }
