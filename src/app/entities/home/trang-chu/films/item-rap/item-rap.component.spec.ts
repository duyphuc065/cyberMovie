import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRapComponent } from './item-rap.component';

describe('ItemRapComponent', () => {
  let component: ItemRapComponent;
  let fixture: ComponentFixture<ItemRapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
