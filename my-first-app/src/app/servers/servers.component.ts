import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean;
  serverCreationStatus: string;
  serverName: string;

  constructor() {
    this.allowNewServer = false;
    this.serverCreationStatus = 'No Server was created!';
    this.serverName = '';

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is '+ this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
