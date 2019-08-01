import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ShareModule } from 'src/app/commons/share/share.module';
import { DangKyModule } from '../dang-ky/dang-ky.module';
import { DangNhapModule } from '../dang-nhap/dang-nhap.module';


@NgModule({
  declarations: [HeaderComponent],
  exports:[HeaderComponent],
  imports: [
    CommonModule,ShareModule,DangKyModule,DangNhapModule
  ]
})
export class HeaderModule { }
