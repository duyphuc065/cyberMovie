import { Component, OnInit, AfterViewInit } from "@angular/core";
import { DataService } from "src/app/commons/share/services/data.service";
import { Subscription } from "rxjs";
import $ from 'jquery';
declare var $:any;

@Component({
  selector: "app-films",
  templateUrl: "./films.component.html",
  styleUrls: ["./films.component.scss"]
})
export class FilmsComponent implements OnInit{
  showingStatus:boolean=true;
  danhSachPhim: any = [];
  subListPhim = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit() {  
    this.layDanhSachPhim();
  } 
  changeShowing(){
    this.showingStatus=true;
  }
  changeComing(){
    this.showingStatus=false;
  }
  layDanhSachPhim() {
    const uri = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP01";
    this.subListPhim = this.dataService.get(uri).subscribe((data: any) => {
      this.danhSachPhim = data;

    });
  }
  ngOnDestroy() {
    this.subListPhim.unsubscribe();
  }
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "nextArrow":
      '<img class="right-arrow" src="assets/img/icon/next-session.png">',
      "prevArrow":
      '<img class="left-arrow" src="assets/img/icon/back-session.png">',
      "infinite": true,
    "speed": 300,
    "responsive": [
      {
        "breakpoint": 1024,
        "settings": {
          "slidesToShow": 3,
          "slidesToScroll": 3,
          "infinite": true,
         
        }
      },
      {
        "breakpoint": 600,
        "settings": {
          "slidesToShow": 2,
          "slidesToScroll": 2
        }
      },
      {
        "breakpoint": 480,
        "settings": {
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      }
    ],            
  };    
  
 
}
