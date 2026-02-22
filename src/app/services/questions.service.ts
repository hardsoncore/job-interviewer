import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { BehaviorSubject, Observable } from 'rxjs';

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

  private setQuestions() {
    this._questions.next(listOfQandA);
  }

  public getRandomQuestion(): Observable<Question> {
    const resSubj = new BehaviorSubject<Question>({} as Question);

    this.questions.subscribe(qs => {
      resSubj.next(qs[Math.floor(Math.random() * qs.length)]);
    });

    return resSubj.asObservable();
  }

  public getQuestionById(id: number): Question {
    return this._questions.getValue().find(q => q.id === id);
  }
}
