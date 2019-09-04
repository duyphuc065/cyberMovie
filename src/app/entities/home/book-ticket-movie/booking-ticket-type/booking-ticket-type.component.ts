import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { ShareDataService } from 'src/app/commons/share/share-data.service';
import { CdkStepper } from '@angular/cdk/stepper';
import { FareMovie, seatCollections } from 'src/app/commons/function/Constants';
import { isBlank } from 'src/app/commons/function/Utils';
import { BookingSeatsComponent } from '../booking-seats/booking-seats.component';
@Component({
  selector: 'app-booking-ticket-type',
  templateUrl: './booking-ticket-type.component.html',
  styleUrls: ['./booking-ticket-type.component.scss']
})
export class BookingTicketTypeComponent implements OnInit {
 
  movieItem: any;
  // firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  formGroup:  FormGroup;
  isLinear:  CdkStepper;
  isOptional = false;
  subMovieDetail = new Subscription();
  movieInfo:any = undefined;
  fareMovie:any = FareMovie;
  ticketCounter:any = 1;
  counterTicket = {
    normalCounter: 0,
    vip2DCounter: 0,
    couple2DCounter: 0
  }
  seatsBooking: any = [];
  seatsCollections = seatCollections();
  @ViewChildren(BookingSeatsComponent) seatItems: QueryList<BookingSeatsComponent>;
  constructor(
    private shareDataService: ShareDataService
    
    ) {}
    ngOnInit() {
        this.getMovieInfo();
        if(isBlank(this.movieInfo)){
        this.movieInfo = JSON.parse(localStorage.getItem("movieInfo"));
        }
      
      this.counterTicket.normalCounter++;
    }
    
    getMovieInfo(){
      this.shareDataService.shareDetailMovie.subscribe((data: any)=>{
        if(!isBlank(data)){
          this.movieInfo = data;
        }
      });
    }
    isIncrease(){
      this.ticketCounter+=1;
    }
    seatBooked(value){
      if(value.bookStatus){
        this.seatsBooking.push(value.seat);
      }else{
        let index = this.seatsBooking.findIndex(item =>{
          return item.SoGhe === value.seat.SoGhe;
        });
        this.seatsBooking.splice(index,1);
      }
    }
    deleteBookSeat(index,item) {
      this.seatsBooking.splice(index, 1);
      this.seatItems.map(element => {
        if (element.seat.SoGhe === item.SoGhe) {
          element.bookStatus = false;
        }
      });
    }
}
