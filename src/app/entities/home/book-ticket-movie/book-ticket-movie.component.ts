import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-ticket-movie',
  templateUrl: './book-ticket-movie.component.html',
  styleUrls: ['./book-ticket-movie.component.scss']
})
export class BookTicketMovieComponent implements OnInit {

  @Input() movieItem;
  constructor() { }

  ngOnInit() {
  }

}
