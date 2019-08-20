import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './banner.component';

const routes: Routes = [
  {
    path: "",
    component: BannerComponent,
    children: [
      {
        path: "booking-ticket-movie",
        loadChildren:'./../../book-ticket-movie/book-ticket-movie.module#BookTicketMovieModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannerRoutingModule { }
