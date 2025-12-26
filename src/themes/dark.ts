import type { ThemeConfig } from './types';

/**
 * Dark theme - Beautiful Gray
 *
 * A sophisticated dark theme with rich gray tones
 * and excellent contrast for dark mode.
 */
export const darkTheme: ThemeConfig = {
  colors: {
    // Background: Rich dark gray (#1A1A1A, #1F1F1F range)
    background: '222.2 47.4% 11.2%', // #1A1A1A - rich dark gray
    foreground: '210 40% 98%', // Light gray/white for text

    // Card: Slightly lighter dark gray
    card: '222.2 47.4% 11.2%', // Same as background
    'card-foreground': '210 40% 98%',

    // Popover: Same as card
    popover: '222.2 47.4% 11.2%',
    'popover-foreground': '210 40% 98%',

    // Primary: Sky blue (works well in dark mode)
    primary: '199.1 89.1% 48.2%', // Sky blue
    'primary-foreground': '210 40% 98%',

    // Secondary: Darker gray with depth
    secondary: '217.2 32.6% 17.5%', // Medium dark gray
    'secondary-foreground': '210 40% 98%',

    // Muted: Medium gray
    muted: '217.2 32.6% 17.5%', // Medium dark gray
    'muted-foreground': '215 20.2% 65.1%', // Light gray

    // Accent: Subtle gray accent
    accent: '217.2 32.6% 17.5%',
    'accent-foreground': '210 40% 98%',

    // Destructive: Darker red for dark mode
    destructive: '0 62.8% 30.6%', // Darker red
    'destructive-foreground': '210 40% 98%',

    // Borders and inputs: Medium gray
    border: '217.2 32.6% 17.5%', // Medium dark gray
    input: '217.2 32.6% 17.5%',
    ring: '199.1 89.1% 48.2%', // Primary color for focus rings
  },
  radius: '0.5rem',
};
