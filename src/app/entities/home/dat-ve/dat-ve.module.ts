import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatVeComponent } from './dat-ve.component';
import { DatVeRoutingModule } from './dat-ve-routing.module';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';

@NgModule({
  declarations: [DatVeComponent, DanhSachGheComponent, ItemGheComponent],
  imports: [
    CommonModule,DatVeRoutingModule
  ]
})
export class DatVeModule { }
