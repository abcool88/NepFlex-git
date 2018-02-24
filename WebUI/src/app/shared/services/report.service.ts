import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ReportGetData } from 'app/shared/ResourceModels/ReportGetData';
import { Observable } from 'rxjs/Observable';
import { catchError, retry } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
@Injectable()
export class ReportService {
  private apiUrl_getReport = 'https://localhost/ServiceAPI/api/report';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getReports(): Observable<ReportGetData[]> {
    return this.http.get<ReportGetData[]>(`${this.apiUrl_getReport}`,this.httpOptions)
    .pipe(
      catchError(this.handleError) // then handle the error
    );
  }

  AddReports(val: ReportGetData): Observable<ReportGetData> {
    const result = this.http
      .post(this.apiUrl_getReport, val, this.httpOptions);
    return;
  }

  private handleError(error: HttpErrorResponse) {
    debugger;
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };
}
