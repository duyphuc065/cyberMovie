import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DataService } from './data.service';
import { MESSAGE } from '../../message/Message';
import { Utils } from '../../function/Utils';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
let urlAPI = '';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private dataService: DataService) {
    urlAPI = environment.urlApi;

  }
  dangKy(NguoiDungVM) {
    const url = '/QuanLyNguoiDung/DangKy';
     this.dataService.post(url, NguoiDungVM).subscribe((data:any)=>{
      if(Utils.isSIGN_UP(data) ===false){
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
