import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { AppComponent }            from './app.component';
import { SearchService } from './search.service';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ SearchService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
    
  }
}