import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeProfilePage } from './change-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeProfilePageRoutingModule {}
