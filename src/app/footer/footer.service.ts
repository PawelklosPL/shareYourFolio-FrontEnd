import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class FooterService {
    constructor(private http: HttpClient) { }

    public serverVersion() {
        return this
            .http
            .get(`${environment.serverUrl}/System/Version`);
    }

}