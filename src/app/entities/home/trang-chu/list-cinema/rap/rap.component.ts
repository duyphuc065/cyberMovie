import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rap',
  templateUrl: './rap.component.html',
  styleUrls: ['./rap.component.scss']
})
export class RapComponent implements OnInit {
  @Input() rap;
  constructor() { }

  ngOnInit() {
  }

}
