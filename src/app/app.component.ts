import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { OnInit } from '@angular/core';
import { RoomService } from './room.service';

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
  roomService: RoomService;

  constructor(private auth:AuthService){
      auth.handleAuthentication();
      this.profile = auth.getProfile();
      this.accessToken = auth.getAccessToken();
  }
  title = 'app';

  ngOnInit(): void {
  this.roomService.getRooms().subscribe(
    rooms => this.rooms = rooms,
    error => this.errorMessage = <any>error
  );
  }

}
