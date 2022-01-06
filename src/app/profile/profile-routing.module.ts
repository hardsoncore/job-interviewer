import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
  },
  {
    path: 'change-profile',
    loadChildren: () => import('./subpages/change-profile/change-profile.module').then( m => m.ChangeProfilePageModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('./subpages/statistics/statistics.module').then( m => m.StatisticsPageModule)
  },
  {
    path: 'achievements',
    loadChildren: () => import('./subpages/achievements/achievements.module').then( m => m.AchievementsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./subpages/about/about.module').then( m => m.AboutPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule {}
