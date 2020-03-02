import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Avatar } from './avatar.model';

@Injectable({ providedIn: 'root' })
export class AvatarService {
    private avatar:Avatar[];
    private avatarSource = new BehaviorSubject<Avatar[]>(this.avatar);
    public currentAvatar = this.avatarSource.asObservable();
    constructor(private http: HttpClient){
        this.fetchAvatar();
    }

    public fetchAvatar():void {
        this.http.get(`${environment.serverUrl}/Avatar`).subscribe((avatars:Avatar[]) => {
            this.avatarSource.next(avatars);
        });
    }

public addAvatar(avatar:Avatar){
    this.avatarSource.value.push(avatar);
    this.avatarSource.next(this.avatarSource.value);
}

public createMainAvatar(avatarModel: Avatar):Observable<Object> {
    const mainAvatar: Observable<Object> = this.http.post(`${environment.serverUrl}/Avatar/Create`, avatarModel);
    return mainAvatar;
    }

    public removeAvatar(avatarId: number):Observable<Object> {
        const avatarListRequest: Observable<Object> = this.http.get(`${environment.serverUrl}/Avatar/Delete/${avatarId}`
    );
        return avatarListRequest;
    }

}