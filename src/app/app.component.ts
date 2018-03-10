import {Component} from '@angular/core';

import { SearchService } from './search.service';

import 'style-loader!./app.component.scss';

@Component({
  selector: 'app-shell',
  templateUrl: 'app.component.html'
})

export class AppComponent {

	places: any[];
	errMessage: string ;

  constructor(
    private _searchService : SearchService
    ) {
  }

  keywordChange(keyword: string) {
    
    // Only perform search when at least 3 characters
    if (keyword.length >= 3) {
    	this._searchService.getResults(keyword)
        .subscribe(x => {
        	this.places = x.json().response.groups['0'].items;
          this.errMessage = '';

        }, error => {
        	// console.log('no result');
        	this.errMessage = `Sorry, there's no result match your search`;
        });
    }
    
  }

   
}
