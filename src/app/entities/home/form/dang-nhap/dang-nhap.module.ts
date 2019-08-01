import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DangNhapComponent } from './dang-nhap.component';
import { DangNhapRoutingModule } from './dang-nhap-routing.module';

@NgModule({
  declarations: [DangNhapComponent],
  imports: [
    CommonModule,DangNhapRoutingModule
  ]
})
export class DangNhapModule { }
