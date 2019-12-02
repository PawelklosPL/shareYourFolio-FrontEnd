import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.redirectIfNotAuthorised();
  }
  
  private redirectIfNotAuthorised() {
    let token: string = sessionStorage.getItem("Token");
    if(token == null){
      this.router.navigate(['auth']);
    }
  }

}
