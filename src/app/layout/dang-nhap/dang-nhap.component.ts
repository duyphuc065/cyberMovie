import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/commons/share/services/data.service";
import { UserService } from 'src/app/commons/share/services/user.service';
import { MESSAGE } from 'src/app/commons/message/Message';

@Component({
  selector: "app-dang-nhap",
  templateUrl: "./dang-nhap.component.html",
  styleUrls: ["./dang-nhap.component.scss"]
})
export class DangNhapComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private userService:UserService,
    ) {}

  ngOnInit() {}
  dangNhap(loginForm) {
    // this.userService.dangNhap(loginForm.taiKhoan, loginForm.matKhau).subscribe((data: any) => {
    //     console.log(data);
    //     if (data === "Tài khoản hoặc mật khẩu không đúng !") {
    //       alert(data);
    //     } else {
    //       alert("Đăng nhập thành công");
    //     }
    //   });


    const uri = `QuanLyNguoiDung/DangNhap`;
    const account={
      taiKhoan: loginForm.taiKhoan,
      matKhau: loginForm.matKhau
    }
    this.dataService.post(uri,JSON.stringify(account)).subscribe((data: any) => {
      if (data === MESSAGE.SIGNIN_FAIL) {
        alert(data);
      } else {
        alert("Đăng nhập thành công");
        localStorage.setItem("userLogin", JSON.stringify(data));
      }
    });
  }
  test(){
    console.log("asdasd");
  }
}
