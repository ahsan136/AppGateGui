import { Component, OnInit } from '@angular/core';
import {
  MatButtonToggleModule
} from '@angular/material/button-toggle';
import { SocketComponent } from './socket/socket.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'zta';

  constructor(private socketComponent: SocketComponent){}
    ngOnInit(){

      this.socketComponent.listen('test event').subscribe((data) => {
        console.log(data);
      })
    }
  }

