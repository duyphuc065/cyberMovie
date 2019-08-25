import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  statusLogin:any;
  user:any;
  constructor() { }

  ngOnInit() {
    this.getLocalUser();
    
  }
  
  getUser(value){
    this.statusLogin=value.statusLogin;
    this.user=value.user;
    // console.log(value);
    // console.log(this.user);
  }
  getLocalUser(){
    if(localStorage.getItem("userLogin")!= null){
      this.statusLogin=true;
      this.user=JSON.parse(localStorage.getItem("userLogin"));
    }
    else{
      this.statusLogin=false;
    }
  }
  logOut(){
    this.statusLogin = false;
    localStorage.removeItem("userLogin");
    this.message("error","Đăng xuất thành công");
  }
  message(type,title){
    const toast =swal.mixin({
      toast:true,
      position:'top-end',
      showConfirmButton:false,
    })  
    toast.fire({
      type:type,
      title:title,
      timer: 1500,      
    })
  }
}
