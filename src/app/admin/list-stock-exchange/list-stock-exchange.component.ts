import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from '../../service/stock.service';


@Component({
  selector: 'app-list-stock-exchange',
  templateUrl: './list-stock-exchange.component.html',
  styleUrls: ['./list-stock-exchange.component.css']
})
export class ListStockExchangeComponent implements OnInit {
  results = [];
  loading = false; 

  constructor(
    private router: Router,
    private stockService: StockService
  ) { }

  ngOnInit() {
    this.loadStockExchanges();
  }

  private loadStockExchanges() {
    this.stockService.getAll()
        .subscribe(
            stockExchanges => {
                this.results = stockExchanges['data'];
            },
            error => {
                // this.alertService.error(error);
                this.loading = false;
            });
   
  }



}
