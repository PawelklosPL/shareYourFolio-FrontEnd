import { Component, OnInit } from '@angular/core';
import { MainService } from '../main/main.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private mainService: MainService, private authService: AuthService) {
    
   }

  ngOnInit() {
  }
  
  public isLoggedIn(): boolean {
    let token = sessionStorage.getItem('Token');
    return token != null;
    
  }

  public navBarVisible():boolean {
    return this.mainService.navBarIsVisible();
    }
public logout(){
  this.authService.logoff();
}
  }
