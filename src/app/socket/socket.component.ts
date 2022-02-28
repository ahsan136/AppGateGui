import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
// import { Socket } from 'socket.io-client';
// import * as io from 'socket.io-client'
import { io } from 'socket.io-client'; 
@Injectable({
    providedIn: 'root'
  }) 
@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css']
})
export class SocketComponent  {
  socket: any;
  readonly uri: string = "ws://localhost:3000";
  
  constructor() {
    console.log("starting socket connection")
    this.socket = io(this.uri);
    console.log("ending socket")
   }

  

  listen(eventName: string){
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      })
    })
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);

  }



}
