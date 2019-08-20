import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { BannerRoutingModule } from './banner-routing.module';
import { BookTicketMovieModule } from '../../book-ticket-movie/book-ticket-movie.module';

@NgModule({
  declarations: [BannerComponent],
  exports:[BannerComponent],
  imports: [
    CommonModule, 
    BannerRoutingModule,
    BookTicketMovieModule
  ]
})
export class BannerModule { }
