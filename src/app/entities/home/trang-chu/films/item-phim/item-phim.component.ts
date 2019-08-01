import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input() movie; 
  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
  }
  chiTietPhim(){
    this.router.navigate([
      "/chi-tiet-phim", this.movie.maPhim],
      {
        queryParams:
        {
          tenPhim:this.movie.tenPhim,
        }
      }
    );
  }
}
