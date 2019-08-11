import { Component, OnInit, ɵConsole } from '@angular/core';
import { MovieManagementService } from 'src/app/commons/share/services/movie-management.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  MOVIECOLLECTIONS: any;
  constructor(private movieManagementService: MovieManagementService) { }

  ngOnInit() {
    this.getMoviesCollections();
  }

  getMoviesCollections() {
    this.MOVIECOLLECTIONS = this.movieManagementService.getMovies();
  }



}
