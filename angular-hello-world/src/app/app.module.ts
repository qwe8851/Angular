import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserBasicModule } from './user-basic/user-basic.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UserBasicModule],
  providers: [],
  bootstrap: [AppComponent], //AppRoutingModule 변경
})
export class AppModule {}
