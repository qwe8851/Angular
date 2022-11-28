import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessAlertComponent } from './success-alert.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    SuccessAlertComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  exports:[
    SuccessAlertComponent
  ]
})
export class SuccessAlertModule {}
