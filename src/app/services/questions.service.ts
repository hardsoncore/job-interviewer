import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

import { questions } from 'src/assets/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions = questions;

  constructor() { }

  public getRandomQuestion(): Question {
    return this.questions[0];
  }

  public getQuestionById(id: number): Question {
    return this.questions.find(q => q.id === id);
  }

  public getAllQuestions(): Question[] {
    return this.questions;
  }
}
