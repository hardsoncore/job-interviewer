import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchievementsPage } from './achievements.page';

const routes: Routes = [
  {
    path: '',
    component: AchievementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchievementsPageRoutingModule {}
