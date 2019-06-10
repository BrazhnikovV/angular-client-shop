import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Category } from '../models/category';


/**
 * @class - RpcService
 * @classdesc - сервис для получения данных ...
 */
@Injectable({ providedIn: 'root' })
export class RpcService {

  /**
   *  @access private
   *  @var string heroesUrl - url адрес rest api(rpc)
   */
  private apiUrl = 'http://shop-rest-api/v2/';

  /**
   * constructor - конструктор
   * @param http - объект для работы с http
   */
  constructor( private http: HttpClient) {}

  /**
   * getCategories - получить список категорий
   * @return Observable<any> | throwError( error )
   */
  public getCategories(): Observable<any> {
    return this.http.get( this.apiUrl + 'categories/list' ).pipe(
      tap(response => {}),
      catchError(error => {
        return throwError( error );
      })
    );
  }
}
