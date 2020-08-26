import {Component, OnInit} from '@angular/core';
import { Observable, of } from 'rxjs';
import { StockDataService } from './stockData.service';
import { data } from './stockData.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'stock-data',
  templateUrl: './stockData.component.html',
  styleUrls: ['./stockData.component.scss']
})
export class StockData implements OnInit {

  public data$: Observable<[data]>;
  public error$: Observable<string>;
  public onSearch: FormGroup;

  constructor(
    private _stockDataService: StockDataService,
    private fb: FormBuilder,
  ){
    this.onSearch=this.fb.group({
      "inputValue": [ '', ],
    }); 
  }

  get inputValue() { return this.onSearch.get('inputValue')}

  ngOnInit() {}

  public onSubmit() {
    this._stockDataService.getStockData( this.inputValue.value ).subscribe(
      (result:any) => { 
        if(result.data.length>0)this.data$ = of( result.data );
        else { this.error$ = of( 'No Results Found' ); }  
      },
      (error) => {  },
    );
  }
}