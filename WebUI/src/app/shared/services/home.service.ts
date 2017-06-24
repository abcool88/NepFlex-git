import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { MenuTop } from '../interfaces/header';

@Injectable()
export class HomeService {
  private apiUrl = 'https://localhost/ServiceAPI/api/menuTopContainer';
  MenuTop: Observable<MenuTop>;
  constructor(private http: Http) { }

  getMenuTopItems(): Observable<MenuTop[]> {
    return this.http.get(this.apiUrl)
      .map(this.extractData);
  }

  private extractData(res: Response): MenuTop[] {
    const body = res.json();
    console.log(body);
    return <MenuTop[]>body || <MenuTop[]>[];
  }

}
