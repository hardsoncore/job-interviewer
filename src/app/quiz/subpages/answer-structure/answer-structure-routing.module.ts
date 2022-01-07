import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnswerStructurePage } from './answer-structure.page';

const routes: Routes = [
  {
    path: '',
    component: AnswerStructurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnswerStructurePageRoutingModule {}
