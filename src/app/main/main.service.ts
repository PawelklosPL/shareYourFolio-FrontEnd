import { WindowOption } from './main.model';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MainService {
    constructor(private http: HttpClient){
    }

    public getWindowOption(): WindowOption[] {
        return [{ name: "Nav bar", value: true } as WindowOption,
        { name: "Share Points", value: true } as WindowOption,
        { name: "Tags", value: true } as WindowOption,
        { name: "Name", value: true } as WindowOption,
        { name: "Description", value: true } as WindowOption];
    }

    public getMainAvatar():Observable<Object> {
        const header = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
        let avatarListRequest: Observable<Object> = this.http.get(`${environment.serverUrl}/Avatar`
        );
        return avatarListRequest;
    }

    public navBarIsVisible(): boolean {
        let windowOptions = this.getWindowOption();
        let navBarOption = windowOptions.find((windowOption) => { return windowOption.name == "Nav bar" });
        return navBarOption.value;
    }
}

