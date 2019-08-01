import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DangKyComponent } from './dang-ky.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shares/material/material.module';

@NgModule({
  declarations: [DangKyComponent],
  exports:[DangKyComponent],
  imports: [
    CommonModule,FormsModule,MaterialModule
  ]
})
export class DangKyModule { }
