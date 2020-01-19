import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class TestService {
    constructor(private http: HttpClient){}
    public sendReq(url: string):Observable<Object> {
        let avatarListRequest: Observable<Object> = this.http.get(`${environment.serverUrl}${url}`
        );
        return avatarListRequest;
    }
}