import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ShareDataService } from '../share-data.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieManagementService {
  movieCollections: any;
  cineplexCollections: any;
  subcription = new Subscription();
  constructor(
    private dataService: DataService,
    private shareDataService: ShareDataService
  ) { }
  ngOnInit() {
  }

  getMovies() {
    const uri = `QuanLyPhim/LayDanhSachPhim`;
    this.subcription = this.dataService.get(uri)
      .subscribe((data: any) => {
        // console.table(data);
        this.movieCollections = data;
        this.shareDataService.sharingDataMovieCollections(data);
      });
  }


  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
