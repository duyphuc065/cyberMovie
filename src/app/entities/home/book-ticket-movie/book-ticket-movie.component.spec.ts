import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTicketMovieComponent } from './book-ticket-movie.component';

describe('BookTicketMovieComponent', () => {
  let component: BookTicketMovieComponent;
  let fixture: ComponentFixture<BookTicketMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTicketMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTicketMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
