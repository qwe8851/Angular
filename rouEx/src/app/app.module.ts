import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'; //라우터
import { FirstUserComponent } from './first-user/first-user.component';
import { SecondUserComponent } from './second-user/second-user.component';
const router: Routes = [
  //라우팅
  { path: 'first', component: FirstUserComponent },
  { path: 'second', component: SecondUserComponent },
  { path: '', redirectTo: '/first', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, FirstUserComponent, SecondUserComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router, { enableTracing: false, useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
