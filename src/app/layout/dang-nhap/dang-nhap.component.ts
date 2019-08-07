import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/shares/services/data.service";
import { UserService } from 'src/app/shares/services/user.service';

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


    const uri = `QuanLyNguoiDung/DangNhap?taiKhoan=${
      loginForm.taiKhoan
    }&matKhau=${loginForm.matKhau}`;
    this.dataService.post(uri).subscribe((data: any) => {
      console.log(data);
      if (data === "Tài khoản hoặc mật khẩu không đúng !") {
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
