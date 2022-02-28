import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PipeComponent } from './pipe/pipe.component';
import { FlowchartComponent } from './flowchart/flowchart.component';
import { SocketComponent } from './socket/socket.component';
import { Socket } from 'socket.io-client';


const routes: Routes = [
  
  // { path:'profile-table', component: ProfileTableComponent, },
  
  { path: 'pipe', component: PipeComponent,},
  { path: 'flow', component: FlowchartComponent,},
  { path: 'socket' , component: SocketComponent,},



];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

