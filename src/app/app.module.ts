import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './header/user-card/user-card.component';
import { ColoryDirective } from './colory.directive';
import { DelayDirective } from './delay.directive';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './user/profile/profile.component';
import { SettingsComponent } from './user/settings/settings.component';

import { UserResolveService } from './services/user-resolve.service';
import {AuthGuard} from './guards/auth.guard';

const routes = [
  {
    path: 'user/:userId',
    canActivate: [AuthGuard],
    resolve: {
      user: UserResolveService
    },
    component: UserComponent,
    children: [
        { path: 'settings', component: SettingsComponent },
        { path: 'profile', component: ProfileComponent }
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    UserCardComponent,
    ColoryDirective,
    DelayDirective,
    ProfileComponent,
    SettingsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [UserResolveService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
