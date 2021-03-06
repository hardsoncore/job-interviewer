import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';

import { QuestionsService } from '../services/questions.service';
import { Question, Results } from '../models/question.model';
import { QueryParams } from '../models/app.model';
import { ResultsService } from '../services/results.service';

@Component({
  selector: 'app-questions',
  templateUrl: 'questions.page.html',
  styleUrls: ['questions.page.scss']
})
export class QuestionsPage implements OnInit {
  questions: Question[] = [];
  results: Results[];

  constructor(
    private questionsService: QuestionsService,
    private router: Router,
    private resultsService: ResultsService,
  ) { }

  ngOnInit() {
    this.questionsService.questions.subscribe(questions => this.questions = questions);
    this.resultsService.results.subscribe(results => this.results = results);
  }

  public getPercentById(id: number): Observable<number> {
    return this.resultsService.getPercentById(id);
  }

  public clickOnQuestion(question: Question): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        questionId: question.id,
      } as QueryParams
    };

    this.router.navigate(['tabs/questions/question-info'], navigationExtras);
  }
}
