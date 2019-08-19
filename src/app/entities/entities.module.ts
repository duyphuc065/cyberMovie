import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesComponent } from './entities.component';
import { EntitiesRoutingModule } from './entities-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    EntitiesComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    EntitiesRoutingModule
  ]
})
export class EntitiesModule { }
