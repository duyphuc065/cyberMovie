import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from './commons/share/material/material.module';
 
import { EntitiesModule } from './entities/entities.module';
import { CommonModule } from '@angular/common';
 
@NgModule({
  declarations: [
    AppComponent
 
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    EntitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

