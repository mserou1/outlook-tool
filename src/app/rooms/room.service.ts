import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { AuthService } from '../auth/auth.service';
import 'rxjs/add/operator/map';
import { FakeModel } from '../models/fake-model';

@Injectable()
export class RoomService {

  constructor(public http: Http, public authHttp: AuthHttp, public authService: AuthService) { }

  // createAuthorizationHeader(headers: Headers) {
  //   headers.append('Authorization', 'Bearer ' +
  //     this.authService.getAccessToken());
  //     console.log(headers);
  // }

  // public getRooms() {
  //   let headers = new Headers();
  //   this.createAuthorizationHeader(headers);
  //   var getResponse = this.http.get('https://graph.microsoft.com/v1.0/me/contacts',
  //   {
  //     headers: headers
  //   })
  //   .map(res => res.json())
  //   return getResponse;
  // }
  public getRooms() {
    var getResponse = this.http.get('http://localhost:8080/assets')
    .map(res => res.json());
    return getResponse;
  }

  public getRoom(id: Number) {
    return this.getRooms()
    .map(rooms => rooms.find(room => room.alias == id));
  }

}
