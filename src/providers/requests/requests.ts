import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RequestsProvider {

  public URL: string = 'https://mascotas.ga/application/';
  //public URL: string = 'http://localhost:8080/';
  constructor(public http: HttpClient) {
    console.log('Hello RequestsProvider Provider');
  }

  getTopRequests(idUsuario: string){
    return this.http.get(`${this.URL}request/ownerTop/${idUsuario}`);
  }

  getUserRequests(idUsuario: string){
    return this.http.get(`${this.URL}request/user/${idUsuario}`);
  }

  getRequestsDate(data: any, idUsuario: string){
    return this.http.post<any>(`${this.URL}request/ownerDate/${idUsuario}`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  addRequest(data: any){
    return this.http.post<any>(`${this.URL}request`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  sendResponse(data: any, id: string): Observable<any> {
    return this.http.put<any>(`${this.URL}request/sendResponse/${id}`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
