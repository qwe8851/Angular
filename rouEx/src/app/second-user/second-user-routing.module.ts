import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondUserComponent } from './second-user.component';

const routes: Routes = [
  {
    path: '',   //second 없어도 동작
    component: SecondUserComponent,
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true }) ], //대괄호 추가
  imports: [RouterModule.forChild(routes) ],    // forroot, forchile 둘 다 가능,..?
  exports: [RouterModule],
})
export class SecondUserRoutingModule {}