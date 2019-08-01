import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCinemaComponent } from './list-cinema.component';
import { RapModule } from './rap/rap.module';
import { CumRapModule } from './cum-rap/cum-rap.module';

@NgModule({
  declarations: [ListCinemaComponent],
  exports:[ListCinemaComponent],
  imports: [
    CommonModule,RapModule,CumRapModule
  ]
})
export class ListCinemaModule { }
