import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SuccessAlertModule } from './success-alert/success-alert.module';
import { WarningAlertModule } from './warning-alert/warning-alert.module';
import { ServerModule } from './server/server.module';
import { ServersModule } from './servers/servers.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServerModule,
    ServersModule,
    SuccessAlertModule,
    WarningAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
