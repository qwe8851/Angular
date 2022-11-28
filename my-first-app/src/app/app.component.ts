import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // username:string;
  showSecret: boolean;
  log: number[] | any;

  constructor() {
    // this.username= '';
    this.showSecret = false;
    this.log = [];
  }

  onToggleDisplays() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}
