

import { SearchResponse } from 'app/shared/ResourceModels/SearchResponse';
import { ItemDescription } from 'app/shared/ResourceModels/ItemDescription';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  private apiUrl_getSearchResponse = 'http://localhost/ServiceAPI/api/search';
  private apiUrl_getItemDescription = 'http://localhost/ServiceAPI/api/ItemDescription';


  constructor(private httpClient: HttpClient) {}

  getItemDescription(): Observable<ItemDescription[]> {
    const a = this.httpClient.get<ItemDescription[]>(
      `${this.apiUrl_getItemDescription}`
    );
    return a;
  }

  getSearchResponse(val: string): Observable<SearchResponse[]> {
    const b = this.httpClient.get<SearchResponse[]>(
      `${this.apiUrl_getSearchResponse}/` + val
    );
    return b;
  }
}
