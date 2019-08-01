import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CumRapComponent } from './cum-rap.component';

@NgModule({
  declarations: [CumRapComponent],
  exports:[CumRapComponent],
  imports: [
    CommonModule
  ]
})
export class CumRapModule { }
