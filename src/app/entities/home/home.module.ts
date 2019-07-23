import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderModule } from 'src/app/layout/header/header.module';
import { FooterModule } from 'src/app/layout/footer/footer.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, HomeRoutingModule,HeaderModule,FooterModule
  ]
})
export class HomeModule { }
