import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { QueryParams } from '../models/app.model';
import { Question } from '../models/question.model';
import { QuestionsService } from '../services/questions.service';
import { ResultsService } from '../services/results.service';

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
    private route: ActivatedRoute,
    private resultsService: ResultsService,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: QueryParams) => {
      if (params.needToUpdate) {
        this.getNextQuestion();
        this._clearQueryParams();
      }
    });

    this.getNextQuestion();
  }

  public visitTheoryPage(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        questionId: this.question.id,
      } as QueryParams
    };

    this.router.navigate(['tabs/questions/question-info'], navigationExtras);
  }

  public submitAnswer(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        questionId: this.question.id,
      } as QueryParams
    };

    this.router.navigate(['tabs/quiz/answer-structure'], navigationExtras);
  }

  public getNextQuestion(): void {
    this.question = null;

    // with timeout looks better
    setTimeout(() => {
      this.questionsService.getRandomQuestion().subscribe(q => this.question = q);
    }, 1000);
  }

  public getPercentById(id: number): Observable<number> {
    return this.resultsService.getPercentById(id);
  }

  private _clearQueryParams(): void {
    this.router.navigate(['.'], { relativeTo: this.route, queryParams: {} });
  }
}
