import { Component, OnInit } from '@angular/core';
import {  Router, TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-hello-world';
  
  constructor(public router: Router) {}

  ngOnInit() {
    this.router.navigate(['user-basic2']);
  }
}
