import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from './download.component';

@NgModule({
  declarations: [DownloadComponent],
  exports:[DownloadComponent],
  imports: [
    CommonModule
  ]
})
export class DownloadModule { }
