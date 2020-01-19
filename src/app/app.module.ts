import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserProjectComponent } from './user-project/user-project.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { MainService } from './main/main.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { AddAvatarComponent } from './user-project/avatar/add-avatar/add-avatar.component';
import { ViewAvatarComponent } from './user-project/avatar/view-avatar/view-avatar.component';
import { FooterComponent } from './footer/footer.component';
import { TestsComponent } from './tests/tests.component';
import { TestComponent } from './tests/test/test.component';
import { TestService } from './tests/test/test.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserSettingsComponent,
    UserProjectComponent,
    HeaderComponent,
    AuthComponent,
    AddAvatarComponent,
    ViewAvatarComponent,
    FooterComponent,
    TestsComponent,
    TestComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MainService,AuthService, TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
