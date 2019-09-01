import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
    { 
      path:"",
      component:HomeComponent,
      children:[
        {
          path:'trang-chu',
          loadChildren:'./trang-chu/trang-chu.module#TrangChuModule'
        },
        // {
        //   path:'test',
        //   loadChildren: './test/test.module#TestModule'
        // },
        // {
        //   path:'dat-ve/:id',
        //   loadChildren:'./dat-ve/dat-ve.module#DatVeModule'
        // }        
      ]
  },  
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
