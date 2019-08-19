import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // Trang Home
    { 
      path: "", 
      redirectTo: "entities", 
      pathMatch: "full" 
    },
   { 
    path:"entities", 
    loadChildren:"./entities/entities.module#EntitiesModule"
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
