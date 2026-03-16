import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    return this._results.pipe(
      map(results => {
        if (!results || results.length === 0) {
          return 0;
        }
        return Math.round(results.reduce((prev, curr) => prev + curr.correctness, 0) / results.length);
      })
    );
  }

  getPercentById(id: number): Observable<number> {
    return this._results.pipe(
      map(results => results.find(result => result.id === id)?.correctness || 0)
    );
  }
}
