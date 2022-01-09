import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Results } from '../models/question.model';
import { QuestionsService } from './questions.service';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  private _results: BehaviorSubject<Results[]> = new BehaviorSubject([]);

  constructor(
    private questionsService: QuestionsService,
  ) {
    const storageResults = localStorage.getItem('results');

    if (storageResults) {
      this._results.next(JSON.parse(localStorage.getItem('results')));
    } else {
      this.questionsService.questions.subscribe(questions => {
        const newResults = questions.map(q => ({ id: q.id, correctness: 0 })) as Results[];
        this.setResults(newResults);
      });
    }
  }

  get results(): Observable<Results[]> {
    return this._results.asObservable();
  }

  setResults(results: Results[]): void {
    this._results.next(results);
    localStorage.setItem('results', JSON.stringify(results));
  }

  getAveragePercent(): Observable<number> {
    const averagePercent = new BehaviorSubject(0);
    this._results.subscribe(results => {
      averagePercent.next(Math.round(results.reduce((prev, curr) => prev + curr.correctness, 0) / results.length));
    });
    return averagePercent.asObservable();
  }

  getPercentById(id: number): Observable<number> {
    const percent = new BehaviorSubject(0);
    this._results.subscribe(results => {
      percent.next(results.find(result => result.id === id)?.correctness || 0);
    });

    return percent.asObservable();
  }
}
