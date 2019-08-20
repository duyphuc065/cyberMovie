import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { FilmsRoutingModule } from './films-routing.module';
import { RapComponent } from './rap/rap.component';
import { ItemRapComponent } from './item-rap/item-rap.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [FilmsComponent, ItemPhimComponent, ChiTietPhimComponent, RapComponent, ItemRapComponent],
  exports:[FilmsComponent],
  imports: [
    CommonModule, SlickCarouselModule,FilmsRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 60,
      space: -10,
      outerStrokeGradient: true,
      outerStrokeWidth: 10,
      outerStrokeColor: "#4882c2",
      outerStrokeGradientStopColor: "#53a9ff",
      innerStrokeColor: "#e7e8ea",
      innerStrokeWidth: 10,
      animateTitle: false,
      animationDuration: 1000,
      showUnits: false,
      showBackground: false,
      showSubtitle:false,
      clockwise: false,
      startFromZero: false ,
      titleFontSize:"50",
      titleColor: "#ffffff",
    })
  ]
})
export class FilmsModule { }
