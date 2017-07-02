import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { MenuContainer, MenuTopNav } from '../interfaces/header';

@Injectable()
export class HomeService {

  private apiUrl_getMenuContainer = 'https://localhost/ServiceAPI/api/menuTop/getMenuContainer';
  private apiUrl_getMenuNav = 'https://localhost/ServiceAPI/api/menuTop/getMenu';

  MenuTop: Observable<MenuContainer>;
  constructor(private http: Http) { }

  getMenuNav(): Observable<MenuTopNav[]> {
    return this.http.get(this.apiUrl_getMenuNav)
      .map(this.extractMenuTopNav);
  }

  private extractMenuTopNav(res: Response): MenuTopNav[] {
    const body = res.json();
    return <MenuTopNav[]>body || <MenuTopNav[]>[];
  }

  getMenuContainer(): Observable<MenuContainer[]> {
    return this.http.get(this.apiUrl_getMenuContainer)
      .map(this.extractMenuContainer);
  }

  private extractMenuContainer(res: Response): MenuContainer[] {
    const body = res.json();
    return <MenuContainer[]>body || <MenuContainer[]>[];
  }

}
