import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import MovieInfo from 'src/app/_core/model/MovieInfo';
import { ShareDataService } from 'src/app/commons/share/share-data.service';

@Component({
  selector: 'app-booking-ticket-type',
  templateUrl: './booking-ticket-type.component.html',
  styleUrls: ['./booking-ticket-type.component.scss']
})
export class BookingTicketTypeComponent implements OnInit {
 
  movieItem: any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;
  subMovieDetail = new Subscription();
  movieInfo = new MovieInfo();
  counterTicket = {
    normalCounter: 0,
    vip2DCounter: 0,
    couple2DCounter: 0
  }
  constructor(
    private shareDataService: ShareDataService
    ) {}
    ngOnInit() {
      this.getMovieInfo();
      this.counterTicket.normalCounter++;
      console.log(this.counterTicket);
    }

    getMovieInfo(){
      this.shareDataService.shareDetailMovie.subscribe((data: any)=>{
        this.movieInfo = data;
      });
    }
}
