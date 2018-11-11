import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalProvider } from "../global/global";

@Injectable()
export class RegisterProvider {

  public URL: string = 'https://mascotas.ga/application/';
  //public URL: string = 'http://localhost:8080/';
  constructor(public http: HttpClient, private  global: GlobalProvider) {
    console.log('Hello RegisterProvider Provider');
  }

  createUser(data): Observable<any> {
    return this.http.post<any>(`${this.URL}user/user`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.global._token
      })
    });
  }

  createUserOwner(data): Observable<any> {
    return this.http.post<any>(`${this.URL}user/owner`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.global._token
      })
    });
  }

}
