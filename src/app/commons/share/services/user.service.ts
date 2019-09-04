import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from './data.service';
import { MESSAGE } from '../../function/Constants';
import {isSignUp } from '../../function/Utils';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
let urlAPI =  environment.urlApi;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private dataService: DataService) {

  }
  dangKy(NguoiDungVM) {
    const url = '/QuanLyNguoiDung/DangKy';
     this.dataService.post(url, NguoiDungVM).subscribe((data:any)=>{
      if(isSignUp(data) ===false){
        alert(data);
      }else{
        alert(data)
      }
    });
     
  }
  dangNhap(user, pass) {
    const url = `/QuanLyNguoiDung/DangNhap?TaiKhoan=${user}&MatKhau=${pass}`;
     this.dataService.post(url).subscribe((data:any)=>{
      if(data ===MESSAGE.SIGNIN_FAIL){
        alert(data);
      }else{
        alert(MESSAGE.SIGNIN_SUCCESS);
        localStorage.setItem("userSignIn",JSON.stringify(data));
      }
    });
  }
  handleErr(err) {
    //Hanlde các mã lỗi ở đây
    return err;
  }
}
