import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinhLuanComponent } from './binh-luan.component';

@NgModule({
  declarations: [BinhLuanComponent],
  exports:[BinhLuanComponent],
  imports: [
    CommonModule
  ]
})
export class BinhLuanModule { }
