import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStockExchangeComponent } from './list-stock-exchange.component';

describe('ListStockExchangeComponent', () => {
  let component: ListStockExchangeComponent;
  let fixture: ComponentFixture<ListStockExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStockExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStockExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
