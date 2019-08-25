import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ShareModule } from 'src/app/commons/share/share.module';
import { DangKyModule } from '../dang-ky/dang-ky.module';
import { DangNhapModule } from '../dang-nhap/dang-nhap.module';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [HeaderComponent],
  exports:[HeaderComponent],
  imports: [
    CommonModule,ShareModule,DangKyModule,DangNhapModule,FormsModule,
    SweetAlert2Module.forRoot({   
  })
  ]
})
export class HeaderModule { }
