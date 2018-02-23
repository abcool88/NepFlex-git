import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { ReportGetData } from 'app/shared/ResourceModels/ReportGetData';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ReportService {
  private apiUrl_getReport = 'https://localhost/ServiceAPI/api/report';

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {}

  getReports(): Observable<ReportGetData[]> {
    return this.http.get(`${this.apiUrl_getReport}`)
    .map(this.extractReports);
  }
  private extractReports(res: Response): ReportGetData[] {
    const body = res.json();
    return <ReportGetData[]>body || <ReportGetData[]>[];
  }

  AddReports(val: ReportGetData): Observable<ReportGetData> {
    const result = this.http
      .post(this.apiUrl_getReport, val, this.options)
      .map(this.extractAddReports)
      .subscribe();
    return;
  }
  private extractAddReports(res: Response) {
    const body = res.json();
    return body || {};
  }
}
