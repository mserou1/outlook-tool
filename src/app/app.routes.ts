import { Routes } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoomDetailComponent } from './rooms/room-detail.component';

export const ROUTES: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'room-detail/:id', component: RoomDetailComponent},
  {path: '**', redirectTo: '' },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);
