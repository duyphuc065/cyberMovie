import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private seatSelected = new BehaviorSubject({} as any);
  shareSeatSelected = this.seatSelected.asObservable();

  private movieColelctions = new BehaviorSubject([] as any);
  shareMovieCollections = this.movieColelctions.asObservable();

  private detailMovie = new BehaviorSubject({} as any);
  shareDetailMovie = this.detailMovie.asObservable();

  constructor() { }
  sharingDataSeatSelected(ghe: any) {
    this.seatSelected.next(ghe);
  }

  sharingDataMovieCollections(movieList: any) {
    this.movieColelctions.next(movieList);
  }
  sharingDataMovieDetails(movie: any) {
    this.detailMovie.next(movie);
  }
}
