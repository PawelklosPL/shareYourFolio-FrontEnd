import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Avatar } from './avatar.model';

@Injectable({ providedIn: 'root' })
export class AvatarService {
    private avatarEdit: Avatar;
    private avatarSourceEdit = new BehaviorSubject<Avatar>(this.avatarEdit);
    public clickedAvatarEdit = this.avatarSourceEdit.asObservable();

    private avatar: Avatar[];
    private avatarSource = new BehaviorSubject<Avatar[]>(this.avatar);
    public currentAvatar = this.avatarSource.asObservable();
    constructor(private http: HttpClient) {
        this.fetchAvatar();
    }

    public fetchAvatar(): void {
        this.http.get(`${environment.serverUrl}/Avatar`).subscribe((avatars: Avatar[]) => {
            this.avatarSource.next(avatars);
        });
    }

    replaceAvatar(avatar: Avatar) {
        // const changeAvatar: Avatar = this.avatarSource.value.find((a: Avatar) => {
        //     return a.Id === avatar.Id;
        // });
        this.avatarSource.value.forEach((a: Avatar) => {
           if ( a.Id === avatar.Id) {
            a = avatar;
           }
        });
        this.avatarSource.next(this.avatarSource.value);
    }
  

    public addAvatar(avatar: Avatar) {
        this.avatarSource.value.push(avatar);
        this.avatarSource.next(this.avatarSource.value);
    }

    public createMainAvatar(avatarModel: Avatar): Observable<Object> {
        const mainAvatar: Observable<Object> = this.http.post(`${environment.serverUrl}/Avatar/Create`, avatarModel);
        return mainAvatar;
    }

    public removeAvatar(avatarId: number): Observable<Object> {
        const avatarListRequest: Observable<Object> = this.http.get(`${environment.serverUrl}/Avatar/Delete/${avatarId}`
        );
        return avatarListRequest;
    }

    editAvatarToSend(avatarEdit: Avatar) {
        const mainAvatar: Observable<Object> = this.http.post(`${environment.serverUrl}/Avatar/Edit`, avatarEdit);
        return mainAvatar;
    }

    public removeAvatarFromList(avatar: Avatar) {
        const deleteAvatarIndex = this.avatarSource.value.indexOf(avatar);
        this.avatarSource.value.splice(deleteAvatarIndex, 1);
        this.avatarSource.next(this.avatarSource.value);
    }

    editAvatar(avatar: Avatar) {
        this.avatarSourceEdit.next(avatar);
    }
}