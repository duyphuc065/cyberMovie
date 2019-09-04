import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookTicketMovieComponent } from './book-ticket-movie.component';
import { BookingSeatsComponent } from './booking-seats/booking-seats.component';
import { TicketStatusHeaderComponent } from './ticket-status-header/ticket-status-header.component';
import { BookTicketMovieRoutingModule } from './book-ticket-movie-routing.module';
import { BookingTicketTypeComponent } from './booking-ticket-type/booking-ticket-type.component';
import { BookingTicketTypeModule } from './booking-ticket-type/booking-ticket-type.module';

@NgModule({
  declarations: [
    TicketStatusHeaderComponent,
    BookTicketMovieComponent,
  ],
  imports: [
    CommonModule,
    BookingTicketTypeModule,
    BookTicketMovieRoutingModule
  ]
})
export class BookTicketMovieModule { }
