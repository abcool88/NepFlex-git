import { Injectable } from '@angular/core';
import { HTTPHeader } from 'app/shared/services/http-header';
import { HttpClient } from '@angular/common/http';
import { SendEmailProperties } from 'app/shared/ResourceModels/SendEmailDetail';
import { Observable } from 'rxjs';

@Injectable()
export class SendEmailService {
  private apiUrl_sendEmail = 'http://localhost/ServiceAPI/api/sendEmail';

  constructor(private httpHeader: HTTPHeader, private http: HttpClient) {}
  sendEmail(val: SendEmailProperties): Observable<SendEmailProperties> {
    console.log('Send EMail: ',val);
    return this.http.post<SendEmailProperties>(
      `${this.apiUrl_sendEmail}`,
      JSON.stringify(val),
      this.httpHeader.httpOptions
    );
  }
}
