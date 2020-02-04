import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Avatar } from './avatar.model';

@Injectable({ providedIn: 'root' })
export class AvatarService {
    constructor(private http: HttpClient){
    }

public getMainAvatar():Observable<Object> {
    let avatarListRequest: Observable<Object> = this.http.get(`${environment.serverUrl}/Avatar`
    );
    return avatarListRequest;
}

public createMainAvatar(avatarModel: Avatar):Observable<Object> {
    let mainAvatar: Observable<Object> = this.http.post(`${environment.serverUrl}/Avatar/Create`, avatarModel);
    return mainAvatar;
    }

    public removeAvatar(avatarId: number):Observable<Object> {
        let avatarListRequest: Observable<Object> = this.http.get(`${environment.serverUrl}/Avatar/Delete/${avatarId}`
    );
        return avatarListRequest;
    }

}