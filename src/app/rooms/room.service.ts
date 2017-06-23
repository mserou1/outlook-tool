import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import { FakeModel } from '../models/fake-model';

@Injectable()
export class RoomService {

  constructor(public http: Http, public authHttp: AuthHttp) { }

  public getRooms() {
    var getResponse = this.http.get('https://graph.microsoft.com/v1.0/me/contacts')
    .map(res => res.json())
    return getResponse;
  }

}
