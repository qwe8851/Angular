import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserBasic2Component } from './user-basic2.component';

const routes: Routes = [
    {
        path: '',
        component: UserBasic2Component
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserBasic2RoutingModule {}
