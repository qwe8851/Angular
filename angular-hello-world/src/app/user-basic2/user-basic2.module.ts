import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBasic2Component } from './user-basic2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserBasic2Component
  ],
  imports: [
    CommonModule,
    UserBasic2Module,
    FormsModule
  ]
})
export class UserBasic2Module { }
