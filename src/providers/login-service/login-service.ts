import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class LoginServiceProvider {

  public URL: string = 'https://mascotas.ga/application/';
  //public URL: string = 'http://localhost:8080/';

  constructor(public http: HttpClient) {
    console.log('Hello LoginServiceProvider Provider');
  }

  loginUser(data): Observable<any> {
    return this.http.post<any>(`${this.URL}user/login`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
