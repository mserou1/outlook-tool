import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AuthService } from './auth/auth.service';
import { RoomService } from './room.service';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash:true})
  ],
  providers: [AuthService, RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
