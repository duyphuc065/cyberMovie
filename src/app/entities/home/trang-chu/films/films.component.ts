import { Component, OnInit, AfterViewInit } from "@angular/core";
import { DataService } from "src/app/shares/services/data.service";
import { Subscription } from "rxjs";
import $ from 'jquery';
declare var $:any;

@Component({
  selector: "app-films",
  templateUrl: "./films.component.html",
  styleUrls: ["./films.component.scss"]
})
export class FilmsComponent implements OnInit,AfterViewInit {

  danhSachPhim: any = [];
  subListPhim = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit() {  
    this.layDanhSachPhim();
  } 
  layDanhSachPhim() {
    const uri = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP05";
    this.subListPhim = this.dataService.get(uri).subscribe((data: any) => {
      console.log(data);
      this.danhSachPhim = data;
    });
  }
  ngOnDestroy() {
    this.subListPhim.unsubscribe();
  }
  slideConfig = {
    "slidesPerRow": 4,
    "rows": 2,
    "slickSetOption": true,
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
          "slidesPerRow": 3,
          "rows": 2,
          "infinite": true,
         
        }
      },
      {
        "breakpoint": 600,
        "settings": {
          "slidesPerRow": 2,
          "rows": 2,
          "infinite": true,
          "arrows": false,
          "dot": false
        }
      }
    ],        
  };  
  ngAfterViewInit() {
    $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
     $(".slick-soon").slick("setPosition");
   });
 }
}
