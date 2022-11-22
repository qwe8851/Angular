import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstUserComponent } from './first-user.component';

@NgModule({
  declarations: [FirstUserComponent],
  imports: [CommonModule],
  exports: [FirstUserComponent]
})
  
export class FirstUserModule {}
