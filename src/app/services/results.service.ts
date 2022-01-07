import { Injectable } from '@angular/core';
import { Results } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  results: Results[];

  constructor() {
    this.results = JSON.parse(localStorage.getItem('results')) || [];
  }

  setResults(results: Results[]): void {
    this.results = results;
    localStorage.setItem('results', JSON.stringify(results));
  }

  getResults(): Results[] {
    return this.results;
  }

  getAveragePercent(): number {
    return this.results.reduce((prev, curr) => prev + curr.correctness, 0) / this.results.length;
  }

  getPercentById(id: number): number {
    return this.results.find(result => result.id === id).correctness;
  }
}
