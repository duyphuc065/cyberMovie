import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cum-rap',
  templateUrl: './cum-rap.component.html',
  styleUrls: ['./cum-rap.component.scss']
})
export class CumRapComponent implements OnInit {
@Input() rap;
  constructor() { }

  ngOnInit() {
  }

}
