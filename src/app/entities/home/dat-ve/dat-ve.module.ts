import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatVeComponent } from './dat-ve.component';
import { DatVeRoutingModule } from './dat-ve-routing.module';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';
import { MaterialModule } from 'src/app/commons/share/material/material.module';
import { CountdownModule } from 'ngx-countdown';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [DatVeComponent, DanhSachGheComponent, ItemGheComponent],
  imports: [
    CommonModule,DatVeRoutingModule,MaterialModule,CountdownModule,MatStepperModule,FormsModule,ReactiveFormsModule
  ]
})
export class DatVeModule { }
