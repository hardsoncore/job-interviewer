import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

import { Question } from 'src/app/models/question.model';
import { QuestionsService } from 'src/app/services/questions.service';
import { QueryParams } from 'src/app/models/app.model';
import { combineLatest, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-question-info',
  templateUrl: './question-info.page.html',
  styleUrls: ['./question-info.page.scss'],
})
export class QuestionInfoPage implements OnInit, OnDestroy {
  questionId: number;
  question: Question;

  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private questionsService: QuestionsService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    // subscribe to both query params and questions list, so we can react to changes in either of them
    combineLatest([
      this.route.queryParams,
      this.questionsService.questions
    ]).pipe(
      takeUntil(this.destroy$), // unsubscribe when component is destroyed
      map(([params, _]) => {
        this.questionId = +params.questionId;
        return this.questionsService.getQuestionById(this.questionId);
      }),
      filter(question => !!question), // skip if question not found
      // distinctUntilChanged is needed to prevent reloading the answer content if the same question is emitted again
      distinctUntilChanged((prev, curr) => prev.id === curr.id)
    ).subscribe((question) => {
      this.question = question;
      this.loadAnswerContent(this.question.answer); // TODO: ideally, need not to rewrite the field, but to have a separate one for content
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public submitAnswer(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        questionId: this.question.id,
      } as QueryParams
    };

    this.router.navigate(['tabs/quiz/answer-structure'], navigationExtras);
  }

  private loadAnswerContent(path: string) {
    this.http.get(path, { responseType: 'text' }).subscribe({
      next: (content) => {
        this.question = {
          ...this.question,
          answer: content,
        };
      },
      error: (err) => {
        console.error('Failed to load answer content', err);
        this.question = {
          ...this.question,
          answer: '<p class="load-answer-error">Failed to load answer content...😭</p>',
        };
      }
    });
  }
}
