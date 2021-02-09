import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { concat, interval, Observable, Subject, throwError } from 'rxjs';
import { catchError, map, take, takeLast, tap } from 'rxjs/operators';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public error$: Subject<string> = new Subject<string>();
  public progress$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) { }

  getArticles(context: string): Observable<any> {
    const options = {params: new HttpParams().set('page-size', '50')};

    const total = 20;

    // Fake progress
    // progress$ is needed to demonstrate progress because the request is very fast
    const progress$ = interval(20).pipe(
      take(total + 1),
      map(num => num / total * 100),
      tap(percent => this.progress$.next(`${percent}%`))
    );

    const request =  this.http.get(
      `https://content.guardianapis.com/search?q=${context}&api-key=${environment.apiKey}`, options
    ).pipe(
      catchError(this.handleError.bind(this))
    );

    return concat(progress$, request)
      .pipe(
        takeLast(1), // return only request after progress finished
      );
  }

  private handleError(error: HttpErrorResponse) {
    this.error$.next(error.message);

    return throwError(error);
  }

}
