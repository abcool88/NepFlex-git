import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SearchResponse } from 'app/shared/ResourceModels/SearchResponse';


@Injectable()
export class ReportService {
  private apiUrl_getReport = 'https://localhost/ServiceAPI/api/report';

  constructor(private http: Http) { }

  getReports(val: string): Observable<SearchResponse[]> {
    return this.http
      .get(`${this.apiUrl_getReport}`)
      .map(this.extractReports);
  }
  private extractReports(res: Response): SearchResponse[] {
    const body = res.json();
    return <SearchResponse[]>body || <SearchResponse[]>[];
  }

}
