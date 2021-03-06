import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

import { QuestionsService } from 'src/app/services/questions.service';
import { Question, Results } from 'src/app/models/question.model';
import { QueryParams } from 'src/app/models/app.model';
import { ResultsService } from 'src/app/services/results.service';

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
    private router: Router,
    private questionsService: QuestionsService,
    private resultsService: ResultsService,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: QueryParams) => {
      this.questionId = +params.questionId;

      this._initQuestion();
    });

    this._getResults();
  }

  public backToQuiz(useParams = false): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        needToUpdate: true
      } as QueryParams
    };

    this.router.navigate(['tabs/quiz'], useParams && navigationExtras);
  }

  public saveResult(): void {
    const correctness = this._calculateCorrectness();
    this._updateResults(correctness);

    this.resultsService.setResults(this.results);
    this.backToQuiz(true);
  }

  private _initQuestion(): void {
    this.questionsService.questions.subscribe(() => {
      this.question = this.questionsService.getQuestionById(this.questionId);
    });
  }

  private _getResults(): void {
    this.resultsService.results.subscribe(res => this.results = res);
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
