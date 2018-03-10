import {Component} from '@angular/core';

import { SearchService } from './search.service';

import 'style-loader!./app.component.scss';

@Component({
  selector: 'app-shell',
  templateUrl: 'app.component.html'
})

export class AppComponent {

  constructor(
    private _searchService : SearchService
    ) {
  }

  keywordChange(keyword: string) {

  	console.log(keyword, keyword.length);
    
    if (keyword.length >= 3) {
    	this._searchService.getResults(keyword)
        .subscribe(x => {

          console.log(x);


        }, error => {
        	console.log('no result')
        });
    }
    
  }

   
}
