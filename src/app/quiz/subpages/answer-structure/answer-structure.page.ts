import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { QuestionsService } from 'src/app/services/questions.service';
import { Question } from 'src/app/models/question.model';
import { QueryParams } from 'src/app/models/app.model';

@Component({
  selector: 'app-answer-structure',
  templateUrl: './answer-structure.page.html',
  styleUrls: ['./answer-structure.page.scss'],
})
export class AnswerStructurePage implements OnInit {
  questionId: number;
  question: Question;
  results: any;

  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: QueryParams) => {
      this.questionId = +params.questionId;
    });

    this.initQuestion();
    this.getResults();
  }

  public backToPreviousPage(): void {
    this.location.back();
  }

  public saveResult(): void {
    localStorage.setItem('results', this.results);
  }

  private initQuestion(): void {
    this.questionsService.questions.subscribe(() => {
      this.question = this.questionsService.getQuestionById(this.questionId);
    });
  }

  private getResults(): void {
    this.results = localStorage.getItem('results');
  }
}
