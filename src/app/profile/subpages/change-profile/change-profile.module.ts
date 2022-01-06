import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { IonicModule } from '@ionic/angular';

import { ChangeProfilePageRoutingModule } from './change-profile-routing.module';
import { ChangeProfilePage } from './change-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    ChangeProfilePageRoutingModule
  ],
  declarations: [ChangeProfilePage]
})
export class ChangeProfilePageModule {}
