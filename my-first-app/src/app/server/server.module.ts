import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from '../servers/servers.component';
import { ServerComponent } from './server.component';

@NgModule({
  declarations: [ServerComponent],
  imports: [CommonModule],
  exports: [ServerComponent],
})
export class ServerModule {}
