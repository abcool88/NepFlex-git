import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { MenuTopNav } from '../interfaces/header';
import { SearchResponse } from 'app/shared/ResourceModels/SearchResponse';

@Injectable()
export class HomeService {
  private apiUrl_getSearchResponse = 'https://localhost/ServiceAPI/api/search';
  private apiUrl_getMenuNav = 'https://localhost/ServiceAPI/api/menuTop/getMenu';

  constructor(private http: Http) {}

  // getMenuNav(): Observable<MenuTopNav[]> {
  //   return this.http.get(this.apiUrl_getMenuNav).map(this.extractMenuTopNav);
  // }

  // private extractMenuTopNav(res: Response): MenuTopNav[] {
  //   const body = res.json();
  //   return <MenuTopNav[]>body || <MenuTopNav[]>[];
  // }

  // getSearchResponse(val: string): Observable<SearchResponse[]> {
  //   const req = this.http
  //     .get(`${this.apiUrl_getSearchResponse}/` + val)
  //     .map(this.extractSearchResponse);
  //     return req;
  // }
  // private extractSearchResponse(res: Response): SearchResponse[] {
  //   const body = res.json();
  //   return <SearchResponse[]>body || <SearchResponse[]>[];
  // }
}
