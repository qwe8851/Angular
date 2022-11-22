import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-user-basic',
  templateUrl: './user-basic.component.html',
  styleUrls: ['./user-basic.component.css'],
})
export class UserBasicComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  move() {
    console.log("router");
    this.router.navigate(['app-user-basic2']);
    // this.router.navigate(['board']);
  }
}