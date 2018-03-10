import { Http, RequestOptions } from '@angular/http';


import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


//import { EventResult } from './models/event.model';
import { Subject } from 'rxjs/Subject';


const endPoint = 'https://api.foursquare.com/v2/venues/explore';
const clientID = 'ZTQN33PRCDZ0D3SK0SLGHEQVE3ZTQZGHZPQ0UCV3RDCLSTAG';
const clientSecret = '0TGPOZSXPGGMXRGH2W35P2KZX50JHVCRHHPWIMZM0NTIJ2ZJ';

@Injectable()
export class SearchService {
  public SearchResult: Observable<any>;
  private _lastSearchResult : Subject<any>;


  constructor(private _http: Http) {
    this._lastSearchResult = new Subject<any>();
    this.SearchResult = this._lastSearchResult.asObservable() ;
  }



  getResults(keyword: string) {
    return this._http.get(endPoint +
      '?client_id=' + clientID +
      '&client_secret=' + clientSecret +
      '&v=20180310' +
      '&near=' + keyword)
      .map(x => {
        let response = x.json();
        //let searchResult : any = this.getResults();
        //searchResult.Filters = response.Filters;
        //this._lastSearchResult.next(searchResult);

        console.log('updating search result');
        return response;
      });

  };


}
