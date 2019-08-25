import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { TestRoutingModule } from './test-routing.module';
import { MaterialModule } from 'src/app/commons/share/material/material.module';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,TestRoutingModule,MaterialModule,MatStepperModule,FormsModule,ReactiveFormsModule
  ]
})
export class TestModule { }
