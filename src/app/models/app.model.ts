export enum Themes {
  dark = 'dark',
  light = 'light'
}

export type ThemeType = keyof typeof Themes;

export interface QueryParams {
  canGoBack?: boolean;
  questionId?: string | number; // because number converts to string in parameters
}
