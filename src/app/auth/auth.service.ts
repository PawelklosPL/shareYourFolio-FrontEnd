import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './auth.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { createWiresService } from 'selenium-webdriver/firefox';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) { }
    public login(login: string, password: string) {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded');

        return this
            .http
            .post(`${environment.serverUrl}/token`,
                `grant_type=password&username=${login}&password=${password}`
                , { headers });
    }
    public register(eMail: string, password: string, confirmPassword: string) {
        const headers = new HttpHeaders()
        .set('Content-Type', 'application/json');
      
        const registerDto = {
            Email: eMail,
            Password: password,
            ConfirmPassword: confirmPassword
        };
        return this.http.post(`${environment.serverUrl}/api/account/register`, registerDto, {headers});
    }
    public logoff() {
        sessionStorage.clear();
    }
}