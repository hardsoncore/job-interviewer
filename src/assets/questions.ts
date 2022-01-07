import { Question } from 'src/app/models/question.model';

export const questions: Question[] = [
  {
    id: 1,
    name: 'Как браузер парсит страницу?',
    answer: '',
    tags: ['markup', 'browser'],
    structure: [
      {
        name: 'Парсинг HTML',
        isChecked: false,
      },
        {
        name: 'Построение DOM',
        isChecked: false,
      }
    ],
  },
  {
    id: 2,
    name: 'Что такое <DOCTYPE>. Зачем он нужен?',
    answer: '',
    tags: ['HTML', 'markup'],
    structure: [
      {
        name: 'Определяет версию HTML',
        isChecked: false,
      }
    ],
  }
];
