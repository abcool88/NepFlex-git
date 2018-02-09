import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { SearchResponse } from 'app/shared/ResourceModels/SearchResponse';
import { ItemDescription } from 'app/shared/ResourceModels/ItemDescription';

@Injectable()
export class SearchService {
  private apiUrl_getSearchResponse = 'https://localhost/ServiceAPI/api/search';
  private apiUrl_getItemDescription = 'https://localhost/ServiceAPI/api/ItemDescription';

  constructor(private http: Http) {}

  getItemDescription(): Observable<ItemDescription[]> {
    return this.http.get(this.apiUrl_getItemDescription).map(this.extractItemDescription);
  }

  private extractItemDescription(res: Response): ItemDescription[] {
    const body = res.json();
    return <ItemDescription[]>body || <ItemDescription[]>[];
  }

  getSearchResponse(val: string): Observable<SearchResponse[]> {
    return this.http
      .get(`${this.apiUrl_getSearchResponse}/` + val)
      .map(this.extractSearchResponse);
  }
  private extractSearchResponse(res: Response): SearchResponse[] {
    const body = res.json();
    return <SearchResponse[]>body || <SearchResponse[]>[];
  }
}
