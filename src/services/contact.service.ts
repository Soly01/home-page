import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}
  sendMessage(data: {
    name: string;
    email: string;
    text: string;
  }): Observable<any> {
    const endPoint = 'https://formspree.io/f/xeoowlev';
    return this.http.post(endPoint, data, { observe: 'response' });
  }
}
