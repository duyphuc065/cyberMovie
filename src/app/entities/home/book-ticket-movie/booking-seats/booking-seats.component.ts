import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-booking-seats',
  templateUrl: './booking-seats.component.html',
  styleUrls: ['./booking-seats.component.scss']
})
export class BookingSeatsComponent implements OnInit {
  bookStatus = false;
  @Input() seat;
  @Output() isBookOut = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  booking() {
    // this.bookStatus = this.bookStatus === true ? false : true;
    this.bookStatus = !this.bookStatus;
    let seatObject = {
      bookStatus: this.bookStatus,
      seat: this.seat
    }
    this.isBookOut.emit(seatObject);
  }
}

