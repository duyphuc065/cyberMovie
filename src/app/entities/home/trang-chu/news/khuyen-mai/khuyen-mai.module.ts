import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KhuyenMaiComponent } from './khuyen-mai.component';

@NgModule({
  declarations: [KhuyenMaiComponent],
  exports:[KhuyenMaiComponent],
  imports: [
    CommonModule
  ]
})
export class KhuyenMaiModule { }
