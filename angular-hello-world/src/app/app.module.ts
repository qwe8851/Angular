import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserBasicModule } from './user-basic/user-basic.module';

@NgModule({
  declarations: [
    AppComponent,
    // UserBasic2Component
    // UserBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserBasicModule,
    // UserBasic2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}