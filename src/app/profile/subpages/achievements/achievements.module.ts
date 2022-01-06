import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchievementsPageRoutingModule } from './achievements-routing.module';

import { AchievementsPage } from './achievements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchievementsPageRoutingModule
  ],
  declarations: [AchievementsPage]
})
export class AchievementsPageModule {}
