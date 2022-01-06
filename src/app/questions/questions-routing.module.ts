import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsPage } from './questions.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionsPage,
  },
  {
    path: 'question-info',
    loadChildren: () => import('./subpages/question-info/question-info.module').then( m => m.QuestionInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsPageRoutingModule {}
