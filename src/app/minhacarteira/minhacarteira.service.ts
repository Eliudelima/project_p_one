import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response {
  time: {
    updated: string;
  };
  disclaimer: string;
  bpi: {
    [key in 'BRL' ]: {
      symbol: string;
      description: string;
      rate_float: number;
      rate: string;
    }
  };
}

interface PriceUpdate {
  timestamp: Date;
  BRL: number;
}


@Injectable()
export class MinhacarteiraService {
  currentPrice: Response;
  lastUpdate: Date;

  updateList: Array<PriceUpdate> = [];
  constructor(private http: HttpClient) { }

  update() {
    this.http.get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
    .subscribe(data => {
      this.lastUpdate = new Date();
      this.currentPrice = data;
      this.updateList.push({
        timestamp: this.lastUpdate,
        BRL:Math.random()* (100 - 1) + 1
      });
    });
  }

}