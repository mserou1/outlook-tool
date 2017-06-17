import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AuthService } from './auth/auth.service';
import { RoomsService } from './rooms/rooms.service';

import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ROUTES } from './app.routes';

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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
