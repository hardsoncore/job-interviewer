import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { QuestionsService } from 'src/app/services/questions.service';
import { Question, Results } from 'src/app/models/question.model';
import { QueryParams } from 'src/app/models/app.model';

@Component({
  selector: 'app-answer-structure',
  templateUrl: './answer-structure.page.html',
  styleUrls: ['./answer-structure.page.scss'],
})
export class AnswerStructurePage implements OnInit {
  questionId: number;
  question: Question;
  results: Results[];

  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: QueryParams) => {
      this.questionId = +params.questionId;
    });

    this._initQuestion();
    this._getResults();
  }

  public backToPreviousPage(): void {
    this.location.back();
  }

  public saveResult(): void {
    const correctness = this._calculateCorrectness();
    this._updateResults(correctness);

    localStorage.setItem('results', JSON.stringify(this.results));
  }

  private _initQuestion(): void {
    this.questionsService.questions.subscribe(() => {
      this.question = this.questionsService.getQuestionById(this.questionId);
    });
  }

  private _getResults(): void {
    this.results = JSON.parse(localStorage.getItem('results')) || [];
  }

  private _calculateCorrectness(): number {
    let correctAnswers = 0;
    this.question.structure.forEach(step => step.isChecked && correctAnswers++);

    return (correctAnswers / this.question.structure.length) * 100;
  }

  private _updateResults(correctness: number) {
    const oldRes = this.results?.find(res => res.id === this.question.id);
    if (oldRes) oldRes.correctness = correctness;
    else this.results.push({id: this.question.id, correctness});
  }
}
