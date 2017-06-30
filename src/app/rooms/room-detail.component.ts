import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { RoomService } from './room.service';

@Component({
  selector: 'room-detail',
  template: `
  <div *ngIf="room">
  <div class="col-md-12">
    <div><h2>{{room.name}}</h2></div>
    <div class="alert alert-danger" *ngIf="error">{{ error }}</div>
  </div>
  <div><label class="label label-default">Room Number:</label><span> {{room.alias}}</span> </div>
  <div><label class="label label-default">Company:</label> {{room.company}} </div>
  <div><label class="label label-default">Capacity:</label> {{room.capacity}} </div>
  <div><label class="label label-default">Displays:</label> {{room.displays}} </div>
  <div *ngIf="room.conference"><label class="label label-info">Teleconference Enabled</label></div>
  <p></p>
  <div><button class="btn btn-success btn-group-justified" (click)="updateRoomAvailability()"> Book This Room! </button></div>
</div>`
})

export class RoomDetailComponent implements OnInit {
//  private room:any;

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private location: Location) {

    }

    ngOnInit () {
      this.route.params
   .switchMap((params: Params) => this.roomService.getRoom(+params['id']))
   .subscribe(room => this.room = room);
    }

    public updateRoomAvailability(){
      //console.log("this is a function.")
      this.roomService.updateRoomAvailability(this.room).subscribe();
      ;

    }

    @Input() room: any;

}
