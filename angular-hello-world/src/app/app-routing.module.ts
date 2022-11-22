import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { UserBasic2Module } from '../app/user-basic2/user-basic2.module';
import { UserBasicComponent } from './user-basic/user-basic.component';

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
    component: UserBasicComponent,
    children: [
      {
        path: 'user-basic',
        loadChildren: ()=>import ('../app/user-basic/user-basic.module').then(module=>module.UserBasicModule)
      }
    ]
  },
];

@NgModule({
  imports : [RouterModule.forRoot(routes, { enableTracing: false, useHash: true }) ], //대괄호 추가
  exports: [RouterModule],
})
export class AppRoutingModule {}
