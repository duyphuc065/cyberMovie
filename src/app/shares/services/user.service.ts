import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  dangKy(NguoiDungVM):Observable<any>{
    const url ="http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy";
    return this.http.post(url, NguoiDungVM, httpOptions).pipe(
      tap(
        //Success
        () => {
          //Loading
        },

        //Fail
        catchError(err => {
          return this.handleErr(err);
        })
      )
    );
  }
  dangNhap(user, pass): Observable<any> {
    const url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?TaiKhoan=${user}&MatKhau=${pass}`;
    return this.http.post(url, httpOptions).pipe(
      tap(
        //Success
        () => {
          //Loading
        },

        //Fail
        catchError(err => {
          return this.handleErr(err);
        })
      )
    );
  }
  handleErr(err) {
    //Hanlde các mã lỗi ở đây
    return err;
  }
}
