import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormComponent } from './form.component';

const routes: Routes = [
  {
    path: "",
    component: FormComponent,
    children: [
      {
        path:"dang-ky",
        loadChildren:"./dang-ky/dang-ky.module#DangKyModule"
        // canDeactivate: [CandeactiveGuard]
      },
      {
        path: "dang-nhap",
        loadChildren:"./dang-nhap/dang-nhap.module#DangNhapModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {}
