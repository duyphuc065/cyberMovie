import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [BlogComponent],
  exports:[BlogComponent],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
