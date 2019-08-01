import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
    { path:"",component:HomeComponent,
      children:[
        {
          path:"",
          loadChildren:"./trang-chu/trang-chu.module#TrangChuModule"
        },
        {
          path:"test",
          loadChildren:"./test/test.module#TestModule"
        },
      ]
  },  
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
