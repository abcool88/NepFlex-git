import { HttpHeaders } from '@angular/common/http';

export class HTTPHeader {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
}
