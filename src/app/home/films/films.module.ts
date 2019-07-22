import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';

@NgModule({
  declarations: [FilmsComponent],
  exports:[FilmsComponent],
  imports: [
    CommonModule
  ]
})
export class FilmsModule { }
