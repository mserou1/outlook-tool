import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RoomsComponent } from './rooms/rooms.component';

import { RoomService } from './rooms/room.service';
import { AuthService } from './auth/auth.service';

import { RouterModule } from '@angular/router';
import { Http, RequestOptions, HttpModule } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { ROUTES } from './app.routes';

export function authHttpServiceFactory(http: Http, options: RequestOptions ) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token')),
    globalHeaders: [{'Content-Type': 'application/json'}],
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash:true})
  ],
  providers: [
    AuthService,
    RoomService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
