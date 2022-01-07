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

export interface Results {
  id: number;
  correctness: number;
}
