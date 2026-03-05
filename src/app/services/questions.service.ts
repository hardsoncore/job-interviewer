import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { questions as listOfQandA } from 'src/assets/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private _questions: BehaviorSubject<Question[]> = new BehaviorSubject([]);

  constructor() {
    this.setQuestions();
  }

  get questions(): Observable<Question[]> {
    return this._questions.asObservable();
  }

  public getRandomQuestion(): Observable<Question> {
    return this.questions.pipe(
      map(qs => qs[Math.floor(Math.random() * qs.length)])
    );
  }

  public getQuestionById(id: number): Question {
    return this._questions.getValue().find(q => q.id === id);
  }

  private setQuestions() {
    this._questions.next(listOfQandA);
  }
}
