import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ItemDetail } from 'app/shared/ResourceModels/DetailResponse';

@Injectable()
export class DetailService {
  private apiUrl_getDetailOfItem = 'http://localhost/ServiceAPI/api/itemDetail';

  constructor(private httpClient: HttpClient) {}

  getItemDetail(id: number): Observable<ItemDetail> {
    const a = this.httpClient.get<ItemDetail>(
      `${this.apiUrl_getDetailOfItem}/` + id
    );
    return a;
  }
}
