import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
// import { ServersModule } from './servers/servers.module';
import { FormsModule } from '@angular/forms';
import { SuccessAlertModule } from './success-alert/success-alert.module';
import { WarningAlertModule } from './warning-alert/warning-alert.module';
import { ServerModule } from './server/server.module';

@NgModule({
  declarations: [AppComponent, ServerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServerModule,
    // ServersModule,
    SuccessAlertModule,
    WarningAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
