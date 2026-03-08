import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) { }

  ngOnInit() {
    // Подписываемся на комбинацию изменений параметров роута И обновления вопросов
    combineLatest([
      this.route.queryParams,
      this.questionsService.questions
    ]).pipe(
      takeUntil(this.destroy$),
      map(([params, _]) => {
        // Берем id из параметров
        this.questionId = +params.questionId;
        // Достаем актуальный вопрос
        return this.questionsService.getQuestionById(this.questionId);
      }),
      filter(question => !!question), // Пропускаем дальше только если вопрос найден
      // distinctUntilChanged нужен, чтобы не перезапрашивать файл, если вопрос не поменялся
      distinctUntilChanged((prev, curr) => prev.id === curr.id)
    ).subscribe((question) => {
      this.question = question;
      this.loadAnswerContent(this.question.answer); // question.answer содержит путь
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
