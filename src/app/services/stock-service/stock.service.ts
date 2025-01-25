import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private httpClient: HttpClient) {}

  getStocks(): Observable<any> {
    return this.httpClient.get('/assets/mocks/datas/stock.mock.json');
  }
}
