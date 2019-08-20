import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookTicketMovieComponent } from './book-ticket-movie.component';
import { BookingSeatsComponent } from './booking-seats/booking-seats.component';
import { TicketStatusHeaderComponent } from './ticket-status-header/ticket-status-header.component';
import { BookTicketMovieRoutingModule } from './book-ticket-movie-routing.module';
import { BookingTicketTypeComponent } from './booking-ticket-type/booking-ticket-type.component';

@NgModule({
  declarations: [
    BookTicketMovieComponent,
    BookingSeatsComponent,
    BookingTicketTypeComponent,
    TicketStatusHeaderComponent
  ],
  imports: [
    CommonModule,
    BookTicketMovieRoutingModule
  ]
})
export class BookTicketMovieModule { }
