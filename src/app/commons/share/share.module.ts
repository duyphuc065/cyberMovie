import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsComponent } from 'src/app/shares/components/modals/modals.component';
import { MaterialModule } from 'src/app/shares/material/material.module';

@NgModule({
  declarations: [ModalsComponent],
  exports:[ModalsComponent],
  imports: [
    CommonModule,MaterialModule
  ]
})
export class ShareModule { }
