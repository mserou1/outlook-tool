import { Component } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {RequestOptions, XHRBackend} from '@angular/http';
//import { HTTP_PROVIDERS} from '@angular/http';

@Component({
  selector: 'rooms-component',
  providers: [
    {provide: Http, useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => new Http(backend, defaultOptions),
        deps: [XHRBackend, RequestOptions]}
],
  template: `<div>
  <p>Rooms will be displayed here</p>
  </div>`

}) export class RoomsComponent {
  private rooms:Response;
  private headers: Headers;
    constructor(private _http:Http, auth:AuthService){
      this.headers = new Headers();
      this.headers.append("Authorization", "Bearer " + auth.getAccessToken());
      this.callGetRooms();
    //  http.get("https://graph.microsoft.com/v1.0/me"){
    //    headers: new Headers({"Authorization": "Bearer " + auth.getAccessToken()
  //    })
    //  .subscribe(res => {
    //    if(res.status === 200)
    //      this.rooms = res.json().value;
    //    else
    //      alert("Error");
    //  });
    //  }
  //  }
}
  getRooms(): Observable<Response>{
    var response = this._http.get('https://graph.microsoft.com/v1.0/me', {headers:this.headers})
    .map(this.extractData);
    return response;
  }



  extractData(res:Response){
    let body=res.json();
    return body || [];
  }

  callGetRooms(){
    this.getRooms()
    .subscribe(
      (rooms:Response)=> {
        this.rooms = rooms;
        console.log(rooms);
      },
      error => console.error('Error Handle: ', error),
      () => console.log('GET Action is Complete')


    );
  }

}
