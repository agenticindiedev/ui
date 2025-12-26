import type { ThemeConfig } from './types';

/**
 * Light theme - Off-White (warm cream)
 *
 * A warm, soft light theme with off-white/cream backgrounds
 * and excellent readability.
 */
export const lightTheme: ThemeConfig = {
  colors: {
    // Background: Warm off-white/cream (#FAFAF9, #F5F5F3 range)
    background: '0 0% 98%', // #FAFAFA - warm off-white
    foreground: '222.2 47.4% 11.2%', // Dark charcoal for text

    // Card: Slightly warmer off-white
    card: '0 0% 99%', // #FCFCFC - very light cream
    'card-foreground': '222.2 47.4% 11.2%',

    // Popover: Same as card
    popover: '0 0% 99%',
    'popover-foreground': '222.2 47.4% 11.2%',

    // Primary: Blue with good contrast
    primary: '199.1 89.1% 48.2%', // Sky blue
    'primary-foreground': '210 40% 98%', // Off-white

    // Secondary: Warm gray
    secondary: '210 20% 96%', // Warm light gray
    'secondary-foreground': '222.2 47.4% 11.2%',

    // Muted: Soft warm gray
    muted: '210 20% 96%', // Warm light gray
    'muted-foreground': '215.4 16.3% 46.9%', // Medium gray

    // Accent: Subtle warm tone
    accent: '210 20% 96%',
    'accent-foreground': '222.2 47.4% 11.2%',

    // Destructive: Red
    destructive: '0 84.2% 60.2%',
    'destructive-foreground': '210 40% 98%',

    // Borders and inputs: Soft warm gray
    border: '214.3 20% 91%', // Warm light gray border
    input: '214.3 20% 91%',
    ring: '199.1 89.1% 48.2%', // Primary color for focus rings
  },
  radius: '0.5rem',
};
