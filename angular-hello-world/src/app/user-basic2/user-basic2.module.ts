import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBasic2Component } from './user-basic2.component';
import { UserBasic2RoutingModule } from './user-basic2-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserBasic2Component
  ],
  imports: [
    CommonModule,
    UserBasic2RoutingModule,
    FormsModule
  ]
})
export class UserBasic2Module { }
