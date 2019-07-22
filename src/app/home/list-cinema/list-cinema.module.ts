import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCinemaComponent } from './list-cinema.component';

@NgModule({
  declarations: [ListCinemaComponent],
  exports:[ListCinemaComponent],
  imports: [
    CommonModule
  ]
})
export class ListCinemaModule { }
