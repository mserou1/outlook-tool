import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class RoomsService {


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
