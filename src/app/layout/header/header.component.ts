import { Component, OnInit } from '@angular/core';

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
   
  }
  getUser(value){
    this.statusLogin=value.statusLogin;
    this.user=value.user;
    // console.log(value);
    // console.log(this.user);
  }
  logOut(){
    this.statusLogin = false;
    localStorage.removeItem("userLogin");
  }
}
