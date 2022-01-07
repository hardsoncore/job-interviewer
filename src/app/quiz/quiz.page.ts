import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Question } from '../models/question.model';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-quiz',
  templateUrl: 'quiz.page.html',
  styleUrls: ['quiz.page.scss']
})
export class QuizPage implements OnInit {
  question: Observable<Question>;

  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.question = this.questionsService.getRandomQuestion();
  }
}
