import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { MenuContainer, MenuTopNav, ClothingBrand, ClearenceList, NewArrivals, Fashion } from '../interfaces/header';

@Injectable()
export class HomeService {
  private apiUrl_getFashion = 'https://localhost/ServiceAPI/api/menuTop/fashion';
  private apiUrl_getNewArrival = 'https://localhost/ServiceAPI/api/menuTop/getNewArrival';
  private apiUrl_getClearence = 'https://localhost/ServiceAPI/api/menuTop/clearenceList';
  private apiUrl_getClothingBrand = 'https://localhost/ServiceAPI/api/menuTop/getClothingBrand';
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

  getClothingBrand(): Observable<ClothingBrand[]> {
    return this.http.get(this.apiUrl_getClothingBrand)
      .map(this.extractClothingBrand);
  }
  private extractClothingBrand(res: Response): ClothingBrand[] {
    const body = res.json();
    return <ClothingBrand[]>body || <ClothingBrand[]>[];
  }
  getClearence(): Observable<ClearenceList[]> {
    return this.http.get(this.apiUrl_getClearence)
      .map(this.extractClearence);
  }
  private extractClearence(res: Response): ClearenceList[] {
    const body = res.json();
    return <ClearenceList[]>body || <ClearenceList[]>[];
  }

  getNewArrivals(): Observable<NewArrivals[]> {
    return this.http.get(this.apiUrl_getNewArrival)
      .map(this.extractNewArrivals);
  }
  private extractNewArrivals(res: Response): NewArrivals[] {
    const body = res.json();
    return <NewArrivals[]>body || <NewArrivals[]>[];
  }
  getFashion(): Observable<Fashion[]> {
    return this.http.get(this.apiUrl_getFashion)
      .map(this.extractFashions);
  }
  private extractFashions(res: Response): Fashion[] {
    const body = res.json();
    return <Fashion[]>body || <Fashion[]>[];
  }

}
