import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBasic2Module } from '../app/user-basic2/user-basic2.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'user-basic2',
        loadChildren: ()=>import ('../app/user-basic2/user-basic2.module').then(module=>module.UserBasic2Module)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
