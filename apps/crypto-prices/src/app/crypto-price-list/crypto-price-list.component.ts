import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'mycrypto-crypto-price-list',
  templateUrl: './crypto-price-list.component.html',
  styleUrls: ['./crypto-price-list.component.css'],
})
export class CryptoPriceListComponent {
  cryptoPrices: any = [];

  constructor(private http: HttpClient) {
    this.fetchPrices();
  }

  fetchPrices() {
    this.http
      .get(`/api/crypto/prices`)
      .subscribe((prices) => (this.cryptoPrices = prices));
  }
}
