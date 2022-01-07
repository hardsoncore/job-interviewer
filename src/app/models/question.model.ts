export interface Question {
  id: number;
  name: string;
  answer: string;
  tags: string[];
  structure: Step[];
}

export interface Step {
  name: string;
  isChecked: boolean;
}
