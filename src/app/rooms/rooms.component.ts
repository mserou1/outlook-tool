import { Component } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {RequestOptions, XHRBackend} from '@angular/http';
import {RoomsService} from './rooms.service';
//import { HTTP_PROVIDERS} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'rooms-component',
  providers: [RoomsService],
  template: ``

}) export class RoomsComponent {
  private rooms:Response;
  constructor(roomsService: RoomsService){

  }
}
