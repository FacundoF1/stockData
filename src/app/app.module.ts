
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { StockData } from './stockData/stockData.component';
//Angular Router Module
import { RouterModule, Router } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StockData
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterTestingModule,
    ReactiveFormsModule, 
    HttpClientModule,
    RouterModule.forRoot([
      { path:'', component: StockData }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
