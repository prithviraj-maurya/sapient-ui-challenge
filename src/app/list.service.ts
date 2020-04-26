import { gameDetail } from './model/AppModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  public getGameDetails(): Observable<any> {
    const url = `http://starlord.hackerearth.com/gamesext`;
    return this.http.get(url);
  }
}
