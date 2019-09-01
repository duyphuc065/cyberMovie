import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { ShareDataService } from 'src/app/commons/share/share-data.service';
import { CdkStepper } from '@angular/cdk/stepper';
import { FareMovie } from "../../../../commons/message/Constants"; 
import { isBlank } from 'src/app/commons/message/Utils';
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
}
