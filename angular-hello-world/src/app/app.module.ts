import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserBasicModule } from './user-basic/user-basic.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserBasicComponent } from './user-basic/user-basic.component';

// import { RouterModule, Routes } from '@angular/router'; //라우터

const router: Routes = [
  {
    path: '',
    redirectTo: '/user-basic',
    pathMatch: 'full'
  },
];

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
    RouterModule.forRoot(router, { enableTracing: false, useHash: true }),
  ],
  providers: [],
  bootstrap: [AppRoutingModule],
})
export class AppModule {}