import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookTicketMovieComponent } from './book-ticket-movie.component';
import { BookingTicketTypeComponent } from './booking-ticket-type/booking-ticket-type.component';

const routes: Routes = [
  {
    path: "",
    component: BookTicketMovieComponent,
    // redirectTo: 'booking-type',
    // pathMatch: 'full'
    children: [
      {
        path: "booking-type",
        component: BookingTicketTypeComponent
        // loadChildren: './booking-ticket-type/booking-ticket-type.module#BookingTicketTypeModule'
        
      }
    ]
  },
  // {
  //       path: "booking-type",
  //       // component: BookingTicketTypeComponent
  //       loadChildren: './booking-ticket-type/booking-ticket-type.module#BookingTicketTypeModule'
        
  //     }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookTicketMovieRoutingModule { }
