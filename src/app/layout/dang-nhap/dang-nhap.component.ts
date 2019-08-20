import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import $ from "jquery";
import { DataService } from 'src/app/commons/share/services/data.service';
declare var $: any;

@Component({
  selector: "app-dang-nhap",
  templateUrl: "./dang-nhap.component.html",
  styleUrls: ["./dang-nhap.component.scss"]
})
export class DangNhapComponent implements OnInit {
  @Output() eventUser = new EventEmitter();
  statusLogin:boolean =false;
  constructor(
    private dataService:DataService
    ) {}
 
  ngOnInit() {
 
  }
  dangNhap(loginForm) {   
    const uri = `QuanLyNguoiDung/DangNhap`;
    const account ={
      taiKhoan : loginForm.taiKhoan,
      matKhau :loginForm.matKhau
    } 
    this.dataService.post(uri,JSON.stringify(account)).subscribe((data: any) => { 
      // console.log(data);   
      if (data === "Tài khoản hoặc mật khẩu không đúng!") {
        alert(data);
        // console.log(data);
      } else {
        alert("Đăng nhập thành công");
        console.log(data);
        this.statusLogin=true;
        localStorage.setItem("userLogin", JSON.stringify(data));        
        $('#modelId').modal('hide');
        const objUser = {
          statusLogin: this.statusLogin,
          user: data,
        };
        this.eventUser.emit(objUser);
      }
      
    });
    
  }
  
}
