import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-user',
  templateUrl: './first-user.component.html',
  styleUrls: ['./first-user.component.css']
})
export class FirstUserComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  move() {
    this.router.navigate(['second']);
  }
}