import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from "../global/global";
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class RequestsProvider {

  public URL: string = 'https://mascotas.ga/application/';
  //public URL: string = 'http://localhost:8080/';
  constructor(public http: HttpClient, private global: GlobalProvider) {
    console.log('Hello RequestsProvider Provider');
  }

  getTest(): Observable<any> {
    return this.http.get('https://randomuser.me/api').map((data) => {
      return data['results'];
    });
  }

  getTopRequests(idUsuario: string) {
    return this.http.get(`${this.URL}request/ownerTop/${idUsuario}`, {
      headers: new HttpHeaders({
        'Authorization': this.global._token
      })
    });
  }

  getUserRequests(idUsuario: string) {
    return this.http.get(`${this.URL}request/user/${idUsuario}`, {
      headers: new HttpHeaders({
        'Authorization': this.global._token
      })
    });
  }

  getRequestsDate(data: any, idUsuario: string) {
    return this.http.post<any>(`${this.URL}request/ownerDate/${idUsuario}`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.global._token
      })
    });
  }

  addRequest(data: any) {
    return this.http.post<any>(`${this.URL}request`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.global._token
      })
    });
  }

  sendResponse(data: any, id: string): Observable<any> {
    return this.http.put<any>(`${this.URL}request/sendResponse/${id}`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.global._token
      })
    });
  }
}
