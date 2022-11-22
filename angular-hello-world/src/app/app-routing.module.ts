import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { UserBasic2Module } from '../app/user-basic2/user-basic2.module';
import { UserBasicComponent } from './user-basic/user-basic.component';
import { UserBasic2Component } from './user-basic2/user-basic2.component';

const routes: Routes = [
  // {
  //   path: 'user-basic',
  //   component: UserBasicComponent,
  // },
  // {
  //   path: '',
  //   redirectTo: '/user-basic',
  //   pathMatch: 'full',
  // },

  {
    path: '',
    redirectTo: '/user1',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'user1',
        component: UserBasicComponent,
        // loadChildren: ()=>import ('../app/user-basic/user-basic.module').then(module=>module.UserBasicModule)
      },
      {
        path: 'user2',
        component: UserBasic2Component,
      },
    ],
  },
];

@NgModule({
  imports : [RouterModule.forRoot(routes, { enableTracing: false, useHash: true }) ], //대괄호 추가
  exports: [RouterModule],
})
export class AppRoutingModule {}
