import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SecondUserComponent } from './second-user.component';
import { FirstUserModule } from '../first-user/first-user.module';

@NgModule({
  declarations: [SecondUserComponent],
  imports: [CommonModule, SecondUserModule, FormsModule]
})
export class SecondUserModule {}