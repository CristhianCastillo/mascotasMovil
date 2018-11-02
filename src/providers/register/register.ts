import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the RegisterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegisterProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RegisterProvider Provider');
  }

  createUser(data): Observable<any> {
    //return this.http.post<any>('http://localhost:8080/users', data, {
      return this.http.post<any>('https://mascotas.ga/application/users', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  createUserOwner(data): Observable<any> {
    //return this.http.post<any>('http://localhost:8080/users/owner', data, {
      return this.http.post<any>('https://mascotas.ga/application/users/owner', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

}
