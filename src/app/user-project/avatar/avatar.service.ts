import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AvatarService {
    constructor(private http: HttpClient){
    }

public getMainAvatar():Observable<Object> {
    const header = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
    let avatarListRequest: Observable<Object> = this.http.get(`${environment.serverUrl}/Avatar`
    );
    return avatarListRequest;
}
}