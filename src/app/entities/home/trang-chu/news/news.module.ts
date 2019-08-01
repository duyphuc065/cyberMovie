import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { KhuyenMaiModule } from './khuyen-mai/khuyen-mai.module';
import { BinhLuanModule } from './binh-luan/binh-luan.module';
import { BlogModule } from './blog/blog.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [NewsComponent],
  exports:[NewsComponent],
  imports: [
    CommonModule,KhuyenMaiModule,BinhLuanModule,BlogModule,SlickCarouselModule
  ]
})
export class NewsModule { }
