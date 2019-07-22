import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { BannerModule } from './banner/banner.module';
import { FilmsModule } from './films/films.module';
import { ListCinemaModule } from './list-cinema/list-cinema.module';
import { NewsModule } from './news/news.module';

import { DownloadModule } from './download/download.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, HomeRoutingModule,HeaderModule,FooterModule,BannerModule,FilmsModule,ListCinemaModule,NewsModule,DownloadModule
  ]
})
export class HomeModule { }
