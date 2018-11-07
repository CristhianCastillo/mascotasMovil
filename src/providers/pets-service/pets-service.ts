import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { Observable } from 'rxjs';

@Injectable()
export class PetsServiceProvider {

  public URL: string = 'https://mascotas.ga/application/';
  //public URL: string = 'http://localhost:8080/';
  
  constructor(public http: HttpClient) {
    console.log('Hello PetsServiceProvider Provider');
  }

  getTypePets(){
    return this.http.get(`${this.URL}petType`);
  }

  getAllPets(usuario: string) {
    return this.http.get(`${this.URL}pet/${usuario}`);
  }

  createPet(data: Mascota): Observable<any> {
    return this.http.post<any>(`${this.URL}pet`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updatePet(idMascota: string, data: Mascota): Observable<any> {
    return this.http.put<any>(`${this.URL}pet/${idMascota}`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deletePet(idMascota: string): Observable<any> {
    return this.http.delete<any>(`${this.URL}pet/${idMascota}`,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
