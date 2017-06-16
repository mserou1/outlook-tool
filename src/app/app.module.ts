import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RoomsComponent } from './rooms/rooms.component';


import { AuthService } from './auth/auth.service';
import { RoomService } from './room.service';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash:true})
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
