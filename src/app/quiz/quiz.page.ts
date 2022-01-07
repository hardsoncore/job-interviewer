import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { QueryParams } from '../models/app.model';
import { Question } from '../models/question.model';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-quiz',
  templateUrl: 'quiz.page.html',
  styleUrls: ['quiz.page.scss']
})
export class QuizPage implements OnInit {
  question: Question;

  constructor(
    private questionsService: QuestionsService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getNextQuestion();
  }

  public visitTheoryPage(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        canGoBack: true,
        questionId: this.question.id,
      } as QueryParams
    };

    this.router.navigate(['tabs/questions/question-info'], navigationExtras);
  }

  public submitAnswer(): void {

  }

  public getNextQuestion(): void {
    this.question = null;

    // with timout looks better
    setTimeout(() => {
      this.questionsService.getRandomQuestion().subscribe(q => this.question = q);
    }, 1000);
  }
}
