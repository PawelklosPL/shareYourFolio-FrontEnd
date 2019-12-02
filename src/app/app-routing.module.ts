
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserProjectComponent } from './user-project/user-project.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'user-settings', component: UserSettingsComponent },
    { path: 'user-projects', component: UserProjectComponent },
    { path: 'auth', component: AuthComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}