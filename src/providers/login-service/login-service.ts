import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoginServiceProvider {
    constructor(public http: HttpClient) {
        console.log('Hello LoginServiceProvider Provider');
    }

    loginUser(data): Observable<boolean> {
        //return this.http.post<boolean>("http://localhost:8080/users", data, {
        return this.http.post<boolean>("http://mascotas.ga:8080/usuarios/login", data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
    }
}
