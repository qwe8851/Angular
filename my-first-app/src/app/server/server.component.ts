import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  ServerId: number;
  serverStatus: string;

  constructor() {
    this.ServerId = 10;
    this.serverStatus = 'offline';
  }

  getServerStatus(){
    return this.serverStatus;
  };
}
