import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/commons/share/services/data.service';
import { ShareDataService } from 'src/app/commons/share/share-data.service';
import { MOVIE_LABEL_DEFAULT, CINEMA_LABEL_DEFAULT, NGAYCHIEU_LABEL_DEFAULT, TIME_LABEL_DEFAULT, DISABLE_BUTTON } from 'src/app/commons/message/CommonName';
import MovieInfo from 'src/app/_core/model/MovieInfo';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  MOVIECOLLECTIONS: any = [];
  CINEMACOLLECTIONS: any = []
  SHOWTIMESCOLLECTIONS:any=[];
  DATECOLLECTIONS: any = [];
  isCollapsed: boolean = false;
  defaultName:any = {
    movieName:MOVIE_LABEL_DEFAULT,
    cinemaName: CINEMA_LABEL_DEFAULT,
    ngayXem: NGAYCHIEU_LABEL_DEFAULT,
    suatChieu: TIME_LABEL_DEFAULT
  }
  buttonTemplate: any  =  DISABLE_BUTTON;
  subcription = new Subscription();
  movieInfo = new  MovieInfo();
  constructor(
    private dataService: DataService,
    private shareDataService: ShareDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getMoviesCollections();
  }

  getMoviesCollections() {
    this.isCollapsed = !this.isCollapsed;
    const uri = `QuanLyPhim/LayDanhSachPhim`;
    this.subcription = this.dataService.get(uri)
      .subscribe((data: any) => {
        this.MOVIECOLLECTIONS = data;
      });
  }

  getCineMaCollections(maPhim) {
    this.CINEMACOLLECTIONS = [];
    const uri = `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
    this.dataService.get(uri).subscribe(response => {
      response.heThongRapChieu.forEach(data => {
        data.cumRapChieu.forEach(cumrap => {
          cumrap.lichChieuPhim.forEach(lichchieu => {
            this.movieInfo.giaVe = lichchieu.giaVe;
            const param = {
              tenHeThongRap: '',
              lichChieu: []
            };
           const  cinemaName = data.tenHeThongRap + '-' + cumrap.tenCumRap + '-' + lichchieu.tenRap;
            const index = this.CINEMACOLLECTIONS.findIndex(element=>{
              return element.tenHeThongRap==cinemaName;
            });
            if(index==-1){
              param.tenHeThongRap = cinemaName;
              param.lichChieu.push(lichchieu);
              this.CINEMACOLLECTIONS.push(param);
            }else{
              this.CINEMACOLLECTIONS[index].lichChieu.push(lichchieu);
            }
          });
        });
      });
    });
  }

  chooseMovie(item) {
    this.defaultName.movieName = item.tenPhim;
    this.defaultName.cinemaName = CINEMA_LABEL_DEFAULT;
    this.defaultName.ngayXem=NGAYCHIEU_LABEL_DEFAULT;
    this.defaultName.suatChieu=TIME_LABEL_DEFAULT;
    this.getCineMaCollections(item.maPhim);
    this.movieInfo.init(item);
    

  }
  chooseCinema(cinema) {    
    this.defaultName.cinemaName = cinema.tenHeThongRap;
    this.movieInfo.rapChieu = this.defaultName.cinemaName;

    this.defaultName.ngayXem = NGAYCHIEU_LABEL_DEFAULT;
    this.defaultName.suatChieu= TIME_LABEL_DEFAULT;
    this.selecDateShow(cinema.tenHeThongRap);
  }
  selecDateShow(cinemaName){
    const data = this.CINEMACOLLECTIONS.find(item=>{
      return item.tenHeThongRap==cinemaName;
    });
   
    data.lichChieu.map(item=>{
      // --------------------------------------
      const slot ={
        date: '',
        time: []
      }    
      //----------------------------------------
      const date = new Date(item.ngayChieuGioChieu);
      const dateString=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    // --------------------------------------------
    const showtimeIndex = this.SHOWTIMESCOLLECTIONS.findIndex(value=>{
      return value.date===dateString;
    });
      if(showtimeIndex===-1){
        slot.date=dateString;
        slot.time.push(date.getHours()+':'+date.getMinutes()+':'+date.getSeconds())
        this.SHOWTIMESCOLLECTIONS.push(slot);
      }else{
        this.SHOWTIMESCOLLECTIONS[showtimeIndex].time.push(date.getHours()+':'+date.getMinutes()+':'+date.getSeconds());
      }
      //-------------------------------------------------
    });
  }
  
  setDate(date){
    this.defaultName.ngayXem = date.date;
    this.movieInfo.ngayXem = this.defaultName.ngayXem;

    this.defaultName.suatChieu= TIME_LABEL_DEFAULT;
    this.DATECOLLECTIONS = this.SHOWTIMESCOLLECTIONS.find(item=>{
      return item.date===date.date;
    }).time;
  }
  setTime(item){
    this.defaultName.suatChieu = item;
    this.movieInfo.suatChieu = this.defaultName.suatChieu;
    
  }
  enableButton(){
    return this.defaultName.movieName!=MOVIE_LABEL_DEFAULT
    && this.defaultName.cinemaName!=CINEMA_LABEL_DEFAULT
    && this.defaultName.ngayXem!=NGAYCHIEU_LABEL_DEFAULT
    && this.defaultName.suatChieu!=TIME_LABEL_DEFAULT;
  }
  navigateToSeatType(){
    localStorage.setItem("movieInfo",JSON.stringify(this.movieInfo));
    this.shareDataService.sharingDataMovieDetails(this.movieInfo);
    this.router.navigate(['booking-type']);

  }
  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
