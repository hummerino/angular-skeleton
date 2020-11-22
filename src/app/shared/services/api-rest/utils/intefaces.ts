import { HttpType } from './enums';
/* 
* Utilizzato per formattare la richiesta da inviare
*/
export interface IHttpReequest {
    type     : HttpType;
    endpoint : String;
    url?     : string;
    params?  : any;
    body?    : any;
}

/*
 * Formato ricevuto dai rest service
 */
export interface IHttpResponse<T> {
    Code       : Number;
    Message    : String;
    Data       : T;
}