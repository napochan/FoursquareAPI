import {Component, Input, Output, ElementRef, EventEmitter, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { SearchService } from './search.service';

import 'style-loader!./app.component.scss';

@Component({
    selector: 'app-shell',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

  private _delay: number = 750;
  keyword: string;
  @Output() keywordChangeEvent = new EventEmitter();

  constructor(
      private _elementRef: ElementRef,
      private _searchService : SearchService
      ) {
      const eventStream = Observable.fromEvent(_elementRef.nativeElement, 'keyup')
          .map(() => this.keyword)

          // make sure that 3 chars have been entered
          .filter((query: string) => (query && query.length >= 3) || query.length === 0)
          //.switchMap((val:string) => val.length > 3 ? this.keyword : Observable.of(""))
          .debounceTime(this._delay)
          .distinctUntilChanged()


      eventStream.subscribe(event => {
          this.keywordChangeEvent.emit(event);
      });


      this.keywordChange(this.keyword);
  }

  keywordChange(keyword: string) {
    
    this._searchService.getResults()
          .subscribe(x => {
            /* if response return error, show message here */
            // this.errorMessage = "";
            console.log(x);


          }, error => {

          });

  }

   
}
