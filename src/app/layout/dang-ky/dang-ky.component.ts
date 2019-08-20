import { Component, OnInit, ViewChild } from '@angular/core';
import $ from "jquery";
import { DataService } from 'src/app/commons/share/services/data.service';
declare var $: any;
@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss']
})
export class DangKyComponent implements OnInit {

  constructor(
    private dataService:DataService
  ) { }

  ngOnInit() {
  }
  dangKy(registerForm) {
    const objUser = {
      taiKhoan: registerForm.taiKhoan,
      matKhau: registerForm.matKhau,
      email: registerForm.email,
      soDt: registerForm.soDT,
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
      hoTen:registerForm.hoTen,
    };
    console.log(objUser);
    const uri = "QuanLyNguoiDung/DangKy";
    this.dataService.post(uri, JSON.stringify(objUser)).subscribe((data: any) => {
      if (data === "Tài khoản đã tồn tại") {
        alert(data);
      } else {
        alert("Đăng ký thành công");
        $('#modelId2').modal('hide');
      }
    });
  }
}
