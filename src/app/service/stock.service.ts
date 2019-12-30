import { Injectable } from '@angular/core';
import { StockInfo } from '../models/admin-add-stock-exchange.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  constructor(private http: HttpClient) {}

  add(stockInfo: StockInfo) {
    return this.http.post('http://localhost:9000/exchange/api/v1/add', stockInfo);
  }

  getAll() {
    return this.http.get<StockInfo[]>('http://localhost:9000/exchange/api/v1/list')
  }

  
}
