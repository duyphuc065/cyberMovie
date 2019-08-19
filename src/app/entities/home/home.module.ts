import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderModule } from 'src/app/layout/header/header.module';
import { FooterModule } from 'src/app/layout/footer/footer.module';
import { BookTicketMovieComponent } from './book-ticket-movie/book-ticket-movie.component';
import { BookTicketMovieModule } from './book-ticket-movie/book-ticket-movie.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, 
    HomeRoutingModule,
    HeaderModule,
    FooterModule,
    BookTicketMovieModule
  ]
})
export class HomeModule { }
