import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


const endPoint = 'https://api.foursquare.com/v2/venues/explore';
const clientID = 'ZTQN33PRCDZ0D3SK0SLGHEQVE3ZTQZGHZPQ0UCV3RDCLSTAG';
const clientSecret = '0TGPOZSXPGGMXRGH2W35P2KZX50JHVCRHHPWIMZM0NTIJ2ZJ';

@Injectable()
export class SearchService {
  constructor(private _http: Http) {
  }

  getResults(keyword: string) {
    return this._http.get(endPoint +
      '?client_id=' + clientID +
      '&client_secret=' + clientSecret +
      '&v=20180310' +
      '&near=' + keyword);
  }


}
