import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { TestRoutingModule } from './test-routing.module';
import { MaterialModule } from 'src/app/shares/material/material.module';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,TestRoutingModule,MaterialModule
  ]
})
export class TestModule { }
