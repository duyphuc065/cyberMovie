import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DangNhapComponent } from './dang-nhap.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shares/material/material.module';

@NgModule({
  declarations: [DangNhapComponent],
  exports:[DangNhapComponent],
  imports: [
    CommonModule,FormsModule,MaterialModule
  ]
})
export class DangNhapModule { }
