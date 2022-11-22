import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstUserModule } from './first-user/first-user.module';

// const router: Routes = [   //app-routing.module.ts로 옮김
//   { 
//     path: '', 
//     redirectTo: '/first', 
//     pathMatch: 'full' 
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    // FirstUserComponent,
    // SecondUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstUserModule,
    // SecondUserModule,
    // RouterModule.forRoot(router, { enableTracing: false, useHash: true }),   //app-routing.module.ts로 옮김
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
