import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // Trang Home
    { 
      path: "", 
      redirectTo: "/entities/home/trang-chu/banner", 
      pathMatch: "full" 
    },
   { 
    path:"entities", 
    loadChildren:"./entities/entities.module#EntitiesModule"
   },
  //  { 
  //   path:"booking-ticket", 
  //   loadChildren:"./entities/home/trang-chu/banner/banner.module#BannerModule"
  //  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
