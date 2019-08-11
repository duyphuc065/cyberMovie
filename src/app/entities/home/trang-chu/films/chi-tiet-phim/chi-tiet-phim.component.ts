import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/commons/share/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit {
  id:any;
  tenPhim:any;
  movie:any;
  rap:any;
  subChiTietPhim= new Subscription();
  constructor(
    private dataService:DataService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit() {
    this.getParamsFromURL();
    this.chiTietPhim();
    this.thongtinRap();
  }
  getParamsFromURL(){
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    this.activatedRoute.queryParams.subscribe((params:any)=>{
      this.tenPhim=params.tenPhim;
      console.log(this.tenPhim);
    })
  }
  chiTietPhim(){
    const uri=`QuanLyPhim/LayThongTinPhim?MaPhim=${this.id}`;
    this.subChiTietPhim=this.dataService.get(uri).subscribe((data:any)=>{      
      this.movie=data;
      console.log(this.movie);
    })
  }
  thongtinRap(){
    const uri=`QuanLyRap/LayThongTinHeThongRap`;
    this.subChiTietPhim=this.dataService.get(uri).subscribe((data:any)=>{      
      this.rap=data;
      console.log(this.rap);
    })
  }
  ngOnDestroy(){
    this.subChiTietPhim.unsubscribe();
  }
}
