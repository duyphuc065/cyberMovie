import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/commons/share/services/data.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-dat-ve',
  templateUrl: './dat-ve.component.html',
  styleUrls: ['./dat-ve.component.scss']
})
export class DatVeComponent implements OnInit {

  maLichChieu:any;
  lichChieu:any=[]; 
  listPhim:any;
  id:any;
  maPhim:any;
  subShowTime=new Subscription();
  subListPhim=new Subscription();
  gheDangChon:any=[];
  gia:number=0;
  total:number=0;
  combo:number=0;
  foods:any = [
    {value: '1', viewValue: 'Steak',price:'150000'},
    {value: '2', viewValue: 'Pizza',price:'75000'},
    {value: '3', viewValue: 'Tacos',price:'90000'}
  ];
  constructor(
    private dataService:DataService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
  ) {}

  ngOnInit() {
    this.getParamsFromURL();
    this.getShowTimes();
    this.getListPhim();
  }
  onFinished(){
    alert("Hết thời gian giữ ghế vui lòng đặt vé lại");
    this.router.navigate(["/"]);
  }
  datVe(){
    // alert("Đặt vé thành công");
    // this.router.navigate(["/"]);
  }
  gheChon($event){
    this.gheDangChon=$event;
    let numbers=this.gheDangChon.map(item=>item.Gia);
    let sum =numbers.reduce((a,b)=>a+b,0);
    this.gia=parseInt(sum);
    this.totalPrice();
  }
  selectCombo($event){
    console.log($event);
    this.foods.map((item)=>{
      if($event === item.value){
        this.combo = parseInt(item.price);
        
      } 
      this.totalPrice();
    })
  }
  totalPrice(){
    this.total=this.combo+this.gia;
  }
  getParamsFromURL(){
    this.maLichChieu=this.activatedRoute.snapshot.paramMap.get("id");
    this.activatedRoute.queryParams.subscribe((params:any)=>{
      this.maPhim=params.maPhim;
    })  
    // console.log(this.maPhim);
  }
  getShowTimes(){
    const uri=`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${this.maLichChieu}`;
    this.subShowTime=this.dataService.get(uri).subscribe((data:any)=>{      
      this.lichChieu=data;
      // console.log(this.lichChieu);
    })
  }
  getListPhim(){
    const uri=`QuanLyPhim/LayThongTinPhim?MaPhim=${this.maPhim}`;
    this.subListPhim=this.dataService.get(uri).subscribe((data:any)=>{      
      this.listPhim=data;
      // console.log(this.listPhim);
    })
    
  }
  ngOnDestroy(){
    this.subShowTime.unsubscribe();
    this.subListPhim.unsubscribe();
  }
}
