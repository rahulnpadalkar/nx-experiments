import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';

@Injectable()
export class CryptoService {
  constructor(private readonly httpService: HttpService) {}

  getPrices() {
    return this.httpService
      .get(`https://api2.binance.com/api/v3/ticker/24hr`)
      .pipe(map((res) => res.data))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('Error in getting data');
        })
      );
  }
}
