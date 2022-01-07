import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizPage } from './quiz.page';

const routes: Routes = [
  {
    path: '',
    component: QuizPage,
  },
  {
    path: 'answer-structure',
    loadChildren: () => import('./subpages/answer-structure/answer-structure.module').then( m => m.AnswerStructurePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizPageRoutingModule {}
