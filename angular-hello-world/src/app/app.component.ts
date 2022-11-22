import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// export class AppComponent implements OnInit {
export class AppComponent {
  title = 'angular-hello-world';

  constructor(public router: Router) {}

  ngOnInit() :void{
    this.router.navigate(['user1']);
  }
}
