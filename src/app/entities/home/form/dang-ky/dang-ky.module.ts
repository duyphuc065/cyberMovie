import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DangKyComponent } from './dang-ky.component';
import { DangKyRoutingModule } from './dang-ky-routing.module';

@NgModule({
  declarations: [DangKyComponent],
  imports: [
    CommonModule,DangKyRoutingModule
  ]
})
export class DangKyModule { }
