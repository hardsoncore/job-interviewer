import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionInfoPage } from './question-info.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionInfoPageRoutingModule {}
