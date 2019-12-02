import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './auth.model';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;
  private closeSub: Subscription;
  private storeSub: Subscription;

  public userToken: string = "";
  constructor(private authService: AuthService) { }

  ngOnInit() {
    // console.log(environment.serverUrl);
  }
  public onSubmit(form: NgForm){
    if (!form.valid) {
      return;
  }



  const email = form.value.email;
  const password = form.value.password;

    this.authService.login(email, password).subscribe((responseData: Req) => {
      this.userToken = responseData.access_token;
      // console.log(this.userToken);
      sessionStorage.setItem("Token",responseData.access_token);
      sessionStorage.setItem("IsLoggedIn", "true");
    });
  }

} 
export class Req{
    public  expires:string;
  public issued:string
  public access_token:string;
  public expires_in:number;
  public token_type:string;
  public userName:string;
}