import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoginServiceProvider {
    constructor(public http: HttpClient) {
        console.log('Hello LoginServiceProvider Provider');
    }

    loginUser(data): Observable<any> {
        //return this.http.post<any>('http://localhost:8080/users/login', data, {
          return this.http.post<any>('https://mascotas.ga/application/users/login', data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }
}
