import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/commons/share/services/data.service';

@Component({
  selector: 'app-list-cinema',
  templateUrl: './list-cinema.component.html',
  styleUrls: ['./list-cinema.component.scss']
})
export class ListCinemaComponent implements OnInit {
  heThongRap:any;
  subListRap = new Subscription();
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit() {
    this.layHeThongRap();
  }
  layHeThongRap(){
    const uri="QuanLyRap/LayThongTinHeThongRap";
    this.subListRap=this.dataService.get(uri).subscribe((data)=>{
      this.heThongRap=data;
      console.log(data);
    })
  }
  ngOnDestroy() {
    this.subListRap.unsubscribe();
  }
}
