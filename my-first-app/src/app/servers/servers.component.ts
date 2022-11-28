import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean;
  serverCreationStatus: string;
  serverName: string;
  serverCreated:boolean;
  servers: string[];
  
  constructor() {
    this.allowNewServer = false;
    this.serverCreationStatus = 'No Server was created!';
    this.serverName = '';
    this.serverCreated = false;
    this.servers = ['Testserver', 'Testserver 2'];

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    // this.serverCreationStatus = 'Server was created! Name is '+ this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
