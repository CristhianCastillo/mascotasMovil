import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class PetsAdminProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PetsAdminProvider Provider');
  }

  public URL: string = 'https://mascotas.ga/application/';
  //public URL: string = 'http://localhost:8080/';
  getAllRequest(idUsuario: string) {
    return this.http.get(`${this.URL}request/admin/${idUsuario}`);
  }

}
