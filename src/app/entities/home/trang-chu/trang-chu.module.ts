import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu.component';
import { TrangChuRoutingModule } from './trang-chu-routing.module';
import { BannerModule } from './banner/banner.module';
import { DownloadModule } from './download/download.module';
import { FilmsModule } from './films/films.module';
import { ListCinemaModule } from './list-cinema/list-cinema.module';
import { NewsModule } from './news/news.module';

@NgModule({
  declarations: [TrangChuComponent],
  imports: [
    CommonModule,TrangChuRoutingModule,BannerModule,DownloadModule,FilmsModule,ListCinemaModule,NewsModule
  ]
})
export class TrangChuModule { }
