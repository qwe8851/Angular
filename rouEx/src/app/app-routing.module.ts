import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstUserComponent } from './first-user/first-user.component';
import { SecondUserComponent } from './second-user/second-user.component';
// import { FirstUserModule } from './first-user/first-user.module';
// import { AppComponent } from './app.component';

const routes: Routes = [
  // {
  //   path: 'first',
  //   component: FirstUserComponent,
  // },
  // {
  //   path: 'second',
  //   component: SecondUserComponent,
  // },
  // {
  //   path: '',
  //   redirectTo: '/first',
  //   pathMatch: 'full',
  // }

  {
    //추가 - 없어도 동작하는데 어디서 리다이렉트가 되는건지?
    path: '',
    redirectTo: '/first',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'first',
        component: FirstUserComponent, 
        // loadChildren: ()=>import ('../app/first-user/first-user.module').then(module=>module.FirstUserModule)
      },
      {
        path: 'second',
        component: SecondUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, useHash: true })
  ], //대괄호 추가
  exports: [RouterModule]
})
export class AppRoutingModule {}
