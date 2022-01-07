import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';

import { Question } from '../models/question.model';
import { NavigationExtras, Router } from '@angular/router';
import { QueryParams } from '../models/app.model';

@Component({
  selector: 'app-questions',
  templateUrl: 'questions.page.html',
  styleUrls: ['questions.page.scss']
})
export class QuestionsPage implements OnInit {
  questions: Question[] = [];

  constructor(
    private questionsService: QuestionsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.questions = this.questionsService.getAllQuestions();
  }

  public clickOnQuestion(question: Question): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        canGoBack: true,
        questionId: question.id,
      } as QueryParams
    };

    this.router.navigate(['tabs/questions/question-info'], navigationExtras);
  }
}
