import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './auth.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { createWiresService } from 'selenium-webdriver/firefox';

@Injectable({ providedIn: 'root' })
export class AuthService {


    constructor(private http: HttpClient) { }

    // url: string = "http://localhost:56277";

    public login(login: string, passwords: string) {
        const getData = {grant_type: "password", username: "pierwszy@dupa.pl",password: "Pwd12345." };
        const grant_type = "password";
        const username = "pierwszy@dupa.pl";
        const password = "Pwd12345.";

        

        const headers = new HttpHeaders()
            .set("Content-Type", "application/x-www-form-urlencoded");
            // .set("Origin-List", "Access-Control-Allow-Origin");

        return this
            .http
            .post(`${environment.serverUrl}/token`,
            "grant_type=password&username=pierwszy@dupa.pl&password=Pwd12345."
            ,{headers});
    }
    public register() {

    }
    public logoff() {
        sessionStorage.clear();
    }
}