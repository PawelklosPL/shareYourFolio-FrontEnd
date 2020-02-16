import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;
  private closeSub: Subscription;
  private storeSub: Subscription;
  public userToken: string = "";
  public loadingGif: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('Token')) {
      this.router.navigate(['/main']);
    }
  }

  public logInAss() {
    this.logInAs('pierwszy1@dupa.pl', 'Pwd12345.11');
  }

  public onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.logInAs(email, password);

  }


  private logInAs(email:string, password: string) {
    this.loadingGif = !this.loadingGif;
    this.authService.login(email, password).subscribe((responseData: any) => {
      this.userToken = responseData.access_token;
      sessionStorage.setItem('Token', responseData.access_token);
      this.router.navigate(['/main']);
    }, (error: FalseRequest) => {
      alert("Kręci się jak gówno w przeręblu!");
    });
  }
}
export class Req {
  public expires: string;
  public issued: string;
  public access_token: string;
  public expires_in: number;
  public token_type: string;
  public userName: string;

}

export class FalseRequest {
  public error: string;
  public error_description: string;
}