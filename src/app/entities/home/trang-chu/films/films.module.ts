import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { FilmsRoutingModule } from './films-routing.module';

@NgModule({
  declarations: [FilmsComponent, ItemPhimComponent, ChiTietPhimComponent],
  exports:[FilmsComponent],
  imports: [
    CommonModule, SlickCarouselModule,FilmsRoutingModule
  ]
})
export class FilmsModule { }
