import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shares/services/data.service';
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

  subChiTietPhim= new Subscription();
  constructor(
    private dataService:DataService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit() {
    this.getParamsFromURL();
    this.chiTietPhim();
  }
  getParamsFromURL(){
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    this.activatedRoute.queryParams.subscribe((params:any)=>{
      this.tenPhim=params.tenPhim;
    })
  }
  chiTietPhim(){
    const uri=`QuanLyPhim/LayThongTinPhim?MaPhim=${this.id}`;
    this.subChiTietPhim=this.dataService.get(uri).subscribe((data:any)=>{
      console.log(data);
      this.movie=data;
    })
  }
  ngOnDestroy(){
    this.subChiTietPhim.unsubscribe();
  }
}
