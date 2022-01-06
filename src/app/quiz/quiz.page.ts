import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question.model';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-quiz',
  templateUrl: 'quiz.page.html',
  styleUrls: ['quiz.page.scss']
})
export class QuizPage implements OnInit {
  question: Question;

  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.question = this.questionsService.getRandomQuestion();
  }
}
