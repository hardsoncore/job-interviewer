import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Question } from 'src/app/models/question.model';
import { QuestionsService } from 'src/app/services/questions.service';
import { QueryParams } from 'src/app/models/app.model';

@Component({
  selector: 'app-question-info',
  templateUrl: './question-info.page.html',
  styleUrls: ['./question-info.page.scss'],
})
export class QuestionInfoPage implements OnInit {
  questionId: number;
  question: Question;

  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: QueryParams) => {
      this.questionId = +params.questionId;

      this.initQuestion();
    });
  }

  private initQuestion() {
    this.questionsService.questions.subscribe(() => {
      this.question = this.questionsService.getQuestionById(this.questionId);
    });
  }
}
