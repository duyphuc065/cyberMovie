import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.scss']
})
export class ItemGheComponent implements OnInit {
  trangThaiChon: boolean = false;
  @Input() ghe;
  @Output() eventGhe = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  chonGhe() {
    this.trangThaiChon = !this.trangThaiChon;
    const objGhe = {
      trangThaiChon: this.trangThaiChon,
      ghe: this.ghe      
    };
    // console.log(this.ghe);
    this.eventGhe.emit(objGhe);
  }
}
