import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { URL_KEY } from './utils/constants';
import { IHttpReequest, IHttpResponse } from './utils/intefaces';

import { map, switchMap, debounceTime, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor( private _http : HttpClient ) { 
    
  }

  private _middlewareRestSuccess = ( response : IHttpResponse<any> ) => {
    let _res : IHttpResponse<any>;

    if( !response )
      _res = { Code : -1000, Message : "Nessuna risposta dal server", Data : null };
    else
      _res = { ...response };

    return _res;
  }

  private _middlewareRestError   = ( error ) => {

    let _res : IHttpResponse<any> = {
      Code : error.status, 
      Message : error.error.Message, 
      Data : null
    }

    return throwError( _res );
  }


  public sendRestRequest( req: IHttpReequest): Observable<any> {
    let url = req.url || localStorage.getItem( URL_KEY );
    return this._http.get(url).pipe(
      map( this._middlewareRestSuccess ), 
      catchError( this._middlewareRestError )
    )
  }


  /*return this._http.post(endpoint, this._serializeParameters({username,password,grant_type}).substring(1)).pipe(
    map( token => {
        var jsonData : any;
        try{
            jsonData = token.json();
        }catch( e ){
            return { _error: e.Message }
        }
        return jsonData;
    }),
    catchError((errorResponse: Response | any) => {
        console.error('ApiService::handleError', errorResponse._body);
        var err = JSON.parse(errorResponse._body);
        return throwError(err.error_description);
    })
);*/

}
