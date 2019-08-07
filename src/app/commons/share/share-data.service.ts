import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private seatSelected = new BehaviorSubject({} as object);
  shareSeatSelected = this.seatSelected.asObservable();

  constructor() { }
  sharingDataSeatSelected(ghe: any) {
    this.seatSelected.next(ghe);
  }
}
