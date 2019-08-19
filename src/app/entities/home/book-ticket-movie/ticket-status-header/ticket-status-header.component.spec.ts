import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketStatusHeaderComponent } from './ticket-status-header.component';

describe('TicketStatusHeaderComponent', () => {
  let component: TicketStatusHeaderComponent;
  let fixture: ComponentFixture<TicketStatusHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketStatusHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketStatusHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
