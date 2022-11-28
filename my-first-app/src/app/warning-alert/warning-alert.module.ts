import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningAlertComponent } from './warning-alert.component';



@NgModule({
  declarations: [
    WarningAlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WarningAlertComponent
  ]
})
export class WarningAlertModule { }
