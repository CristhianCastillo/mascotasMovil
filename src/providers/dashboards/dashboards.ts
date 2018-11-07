import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardsProvider {

  public URL: string = 'https://mascotas.ga/application/';
  //public URL: string = 'http://localhost:8080/';
  constructor(public http: HttpClient) {
    console.log('Hello DashboardsProvider Provider');
  }

  getCountServices(id: string) {
    return this.http.get(`${this.URL}DashBoards/countByServices/${id}`);
  }

  getCountQualify(id: string) {
    return this.http.get(`${this.URL}DashBoards/countRatings/${id}`);
  }

}