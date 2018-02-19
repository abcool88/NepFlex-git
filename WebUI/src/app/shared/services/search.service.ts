import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { SearchResponse } from 'app/shared/ResourceModels/SearchResponse';
import { ItemDescription } from 'app/shared/ResourceModels/ItemDescription';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  private apiUrl_getSearchResponse = 'https://localhost/ServiceAPI/api/search';
  private apiUrl_getItemDescription = 'https://localhost/ServiceAPI/api/ItemDescription';

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
