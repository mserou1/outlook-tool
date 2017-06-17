import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { OnInit } from '@angular/core';
//import { RoomService } from './room.service';

//import {ProfileService} from './profile.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  profile: any;
  errorMessage: string;
  rooms = [];
  accessToken: string;
//  roomService: RoomService;


  constructor(private auth:AuthService){
    auth.handleAuthentication();

    //console.log(auth.userProfile);
   //this.profile =   auth.handleAuthentication();
//   profileService:ProfileService = new ProfileService(auth);
  // console.log(this.profile);

  }
  title = 'app';

//  bufferFunctionTwo(auth:AuthService){
///\    auth.handleAuthentication();

//  }
  //bufferFunction(auth:AuthService): void {
  //  wait(100);
//    this.profile = auth.getProfile();
//    this.accessToken = auth.getAccessToken();
//  }
  ngOnInit(): void {
  //  this.bufferFunction(this.auth);

  //this.roomService.getRooms().subscribe(
  //  rooms => this.rooms = rooms,
  //  error => this.errorMessage = <any>error
  //);
  }

}
