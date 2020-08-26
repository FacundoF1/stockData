import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { data } from './stockData.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
  })
  export class StockDataService {

    public dataService$: Observable<data>;
   
    constructor(
      private _http: HttpClient,
    ) { }
  
    /**
     * RETORNA LA RESPUESTA SEGUN LA BUSQUEDA.
     * @param input 
     */
    public getStockData( input: string ) {
      return this._http.get<data>(`${ environment.uri }/api/stocks?date=${input}`);
    }

  }