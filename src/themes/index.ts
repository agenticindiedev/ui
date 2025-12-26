export { lightTheme } from './light';
export { darkTheme } from './dark';
export type { ThemeConfig } from './types';

/**
 * All available themes
 */
export const themes = {
  light: 'light',
  dark: 'dark',
} as const;

export type Theme = keyof typeof themes;
