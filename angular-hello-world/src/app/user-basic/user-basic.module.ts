import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBasicComponent } from './user-basic.component';

@NgModule({
  declarations: [UserBasicComponent],
  imports: [CommonModule],
  exports: [UserBasicComponent],
})
export class UserBasicModule {}