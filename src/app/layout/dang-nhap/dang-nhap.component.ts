import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import $ from 'jquery';
import { DataService } from 'src/app/commons/share/services/data.service';
declare var $: any;

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {
  @Output() eventUser = new EventEmitter();
  statusLogin = false;
  errorLogin = '';
  constructor(
    private dataService: DataService,
    ) {}
 
  ngOnInit() {
 
  }
  dangNhap(loginForm) {   
    const uri = `QuanLyNguoiDung/DangNhap`;
    const account = {
      taiKhoan : loginForm.taiKhoan,
      matKhau :loginForm.matKhau
    } 
    this.dataService.post(uri,JSON.stringify(account)).subscribe((data: any) => {  
        alert('Đăng nhập thành công');
        this.statusLogin=true;
        localStorage.setItem('userLogin', JSON.stringify(data));
        this.errorLogin='';
        $('#modelId').modal('hide');
        const objUser = {
          statusLogin: this.statusLogin,
          user: data,
        };
        this.eventUser.emit(objUser);
      },
      err =>{
        this.errorLogin=err;
        alert('Nhập sai tài khoản/ mật khẩu. Vui lòng nhập lại')
      });
    
  }
  
}
