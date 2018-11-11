import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { GlobalProvider } from "../global/global";

@Injectable()
export class DashboardsProvider {

  public URL: string = 'https://mascotas.ga/application/';
  //public URL: string = 'http://localhost:8080/';
  constructor(public http: HttpClient, private global: GlobalProvider) {
    console.log('Hello DashboardsProvider Provider');
  }

  getCountServices(id: string) {
    return this.http.get(`${this.URL}DashBoards/countByServices/${id}`, {
      headers: new HttpHeaders({
        'Authorization': this.global._token
      })
    });
  }

  getCountQualify(id: string) {
    return this.http.get(`${this.URL}DashBoards/countRatings/${id}`, {
      headers: new HttpHeaders({
        'Authorization': this.global._token
      })
    });
  }

}
