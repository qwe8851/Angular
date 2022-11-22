import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'routerExample';

  constructor(public router: Router){

  }

  ngOnInit(): void {
      this.router.navigate(['first']);  //안해줘도 동작 
  }
}
