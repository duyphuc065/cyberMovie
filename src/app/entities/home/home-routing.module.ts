import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
    { 
      path:"",
      component:HomeComponent,
      children:[
        {
          path:"trang-chu",
          loadChildren:"./trang-chu/trang-chu.module#TrangChuModule"
        },
        {
          path:"dat-ve",
          loadChildren:"./dat-ve/dat-ve.module#DatVeModule"
        }        
      ]
  },  
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
