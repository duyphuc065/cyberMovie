import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TrangChuComponent } from "./trang-chu.component";

const routes: Routes = [
  {
    path: "",
    component: TrangChuComponent,
    children:[
      {
        path: "booking-ticket",
        loadChildren: "./trang-chu/banner/banner.module#BannerModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrangChuRoutingModule {}
