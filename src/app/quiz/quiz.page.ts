import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

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
  percent$: Observable<number>;

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
      this.resultsService.results.pipe(take(1)).subscribe(results => {
        const uncompletedQuestions = results.filter(r => r.correctness < 100);

        if (uncompletedQuestions.length > 0) {
          const randomId = uncompletedQuestions[Math.floor(Math.random() * uncompletedQuestions.length)].id;
          this.question = this.questionsService.getQuestionById(randomId);
          this.percent$ = this.resultsService.getPercentById(this.question.id);
        } else {
          this.questionsService.getRandomQuestion().pipe(take(1)).subscribe(q => {
            this.question = q;
            this.percent$ = this.resultsService.getPercentById(this.question.id);
          });
        }
      });
    }, 1000);
  }

  private _clearQueryParams(): void {
    this.router.navigate(['.'], { relativeTo: this.route, queryParams: {} });
  }
}
