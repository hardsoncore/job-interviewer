import { QuestionCategories, QuestionLevels } from 'src/app/enums/questions.enum';

export interface Question {
  id: number;
  name: string;
  answer: string;
  level: QuestionLevels;
  tags: string[];
  category: QuestionCategories;
  structure: Step[];
}

export interface Step {
  name: string;
  isChecked?: boolean;
}

export interface Results {
  id: number;
  correctness: number;
}
