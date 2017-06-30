import { Component, OnInit } from '@angular/core';
import { RoomService } from './room.service';

//import { HTTP_PROVIDERS} from '@angular/http';

@Component ({
  moduleId: module.id,
  selector: 'rooms-component',
  template: `<div class="row">
  <div class="col-md-12">
    <ul class="list list-unstyled">
      <li *ngFor="let room of rooms" class="li"[routerLink] = "['/room-detail', room.alias]">
        <button class="btn btn-info btn-group-justified"><span class="badge">{{ room.alias }}</span> {{ room.name }}</button>
        <p></p>
      </li>
    </ul>
    <div class="alert alert-danger" *ngIf="error">{{ error }}</div>
  </div>
</div>
`
})

export class RoomsComponent implements OnInit {
  rooms: any[];
  error: String;
  selectedRoom: any;

  constructor(private roomService: RoomService){
    this.roomService.getRooms().subscribe(
      res=>{this.rooms = res},
      error=>this.error = error.statusText
    );
  }

  onSelect(room: any) {
    this.selectedRoom = room

  }



  ngOnInit(){
    this.roomService.getRooms().subscribe(
      res=>{this.rooms = res},
      error=>this.error = error.statusText
    );
  }
}
