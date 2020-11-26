import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';

import { environment } from '../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) { }

  getArticles(context: string): Observable<any> {
    const options = {params: new HttpParams().set('page-size', '50')};
    return this.http.get(
      `https://content.guardianapis.com/search?q=${context}&api-key=${environment.apiKey}`, options
    ).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  private handleError(error: HttpErrorResponse) {
    this.error$.next(error.message);

    return throwError(error);
  }

}
