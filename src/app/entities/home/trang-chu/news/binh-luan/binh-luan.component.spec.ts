import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinhLuanComponent } from './binh-luan.component';

describe('BinhLuanComponent', () => {
  let component: BinhLuanComponent;
  let fixture: ComponentFixture<BinhLuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinhLuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinhLuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
