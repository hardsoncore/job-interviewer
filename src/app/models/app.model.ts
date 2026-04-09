import { Themes } from 'src/app/enums/app.enum';

export type ThemeType = keyof typeof Themes;
export interface QueryParams {
  canGoBack?: boolean;
  questionId?: string | number; // because number converts to string in parameters
  needToUpdate?: boolean;
}
