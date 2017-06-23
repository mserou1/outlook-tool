import { Component, OnInit } from '@angular/core';
import { RoomService } from './room.service';
//import { HTTP_PROVIDERS} from '@angular/http';

@Component ({
  moduleId: module.id,
  selector: 'rooms-component',
  template: `<div class="row">
  <div class="col-md-12">
    <table class="table table-striped">
      <tr *ngFor="let room of rooms">
        <td>{{ room.name }}</td>
      </tr>
    </table>
    <div class="alert alert-danger" *ngIf="error">{{ error }}</div>
  </div>
</div>`

}) export class RoomsComponent implements OnInit {
  rooms: any;
  error: String;

  constructor(private roomService: RoomService){ }

  ngOnInit(){
    this.roomService.getRooms()
    .subscribe(
      res => {this.rooms = res, console.log(res)},
      error => this.error = error.statusText
    );
  }
}
