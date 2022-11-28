import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from '../server/server.component';

@NgModule({
  declarations: [ServersComponent,ServerComponent],
  imports: [CommonModule, FormsModule],
  exports: [ServersComponent],
})
export class ServersModule {}
