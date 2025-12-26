# Setup Guide

Complete setup guide for using `@agenticindiedev/ui` in your project.

## Prerequisites

- Node.js 18+ or Bun
- A React project (Next.js, Vite, Create React App, etc.)
- Tailwind CSS installed

## Installation

```bash
# Using Bun
bun add @agenticindiedev/ui
```

## Step 1: Configure Tailwind CSS

### Option A: Using the Preset (Recommended)

Add the preset to your `tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss';

export default {
  presets: [require('@agenticindiedev/ui/tailwind.preset')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // Include the library in content paths
    '@agenticindiedev/ui/dist/**/*.{js,cjs}',
  ],
  // Your other Tailwind config...
} satisfies Config;
```

### Option B: Manual Configuration

If you prefer not to use the preset, you can manually configure Tailwind:

```ts
import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '@agenticindiedev/ui/dist/**/*.{js,cjs}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        // ... (see tailwind.preset.ts for full config)
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
} satisfies Config;
```

## Step 2: Import Theme CSS

Choose one of the available themes and import it in your app's entry point. **Theme files are self-contained** and include Tailwind CSS, so you don't need to import `styles.css` separately.

### Light Theme (Off-White)

```tsx
// In your main.tsx, App.tsx, or _app.tsx
import '@agenticindiedev/ui/themes/light.scss';
```

### Dark Theme (Gray)

```tsx
// In your main.tsx, App.tsx, or _app.tsx
import '@agenticindiedev/ui/themes/dark.scss';
```

**Important:**

- Only import **ONE** theme SCSS file
- Theme files include Tailwind CSS, so you don't need to import `styles.css` separately
- If you need the default theme, you can import `@agenticindiedev/ui/styles.css` instead

## Step 3: Use Components

Import and use components:

```tsx
import { Button, Card, CardHeader, CardContent } from '@agenticindiedev/ui';

function App() {
  return (
    <Card>
      <CardHeader>
        <h2>Welcome</h2>
      </CardHeader>
      <CardContent>
        <Button variant="primary">Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## Theme Management

### Initialize Theme

Call `initTheme()` when your app loads to apply the saved theme or system preference:

```tsx
import { initTheme } from '@agenticindiedev/ui';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    initTheme();
  }, []);

  return <YourApp />;
}
```

### Switch Themes Programmatically

```tsx
import { setTheme, getTheme, toggleTheme } from '@agenticindiedev/ui';

// Set a specific theme
setTheme('dark'); // or 'light'

// Toggle between themes
toggleTheme();

// Get current theme
const current = getTheme(); // Returns 'light' | 'dark'
```

### Watch System Preference

Automatically switch themes based on system preference:

```tsx
import { watchSystemPreference } from '@agenticindiedev/ui';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const cleanup = watchSystemPreference((theme) => {
      console.log('Theme changed to:', theme);
    });

    return cleanup; // Cleanup on unmount
  }, []);

  return <YourApp />;
}
```

## Framework-Specific Setup

### Next.js

1. Install the package:

```bash
bun add @agenticindiedev/ui
```

2. Update `tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss';

export default {
  presets: [require('@agenticindiedev/ui/tailwind.preset')],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@agenticindiedev/ui/dist/**/*.{js,cjs}',
  ],
} satisfies Config;
```

3. Import theme in `app/layout.tsx` or `pages/_app.tsx`:

```tsx
import '@agenticindiedev/ui/themes/light.scss';
// or
import '@agenticindiedev/ui/themes/dark.scss';
```

### Vite + React

1. Install the package:

```bash
bun add @agenticindiedev/ui
```

2. Update `tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss';

export default {
  presets: [require('@agenticindiedev/ui/tailwind.preset')],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@agenticindiedev/ui/dist/**/*.{js,cjs}',
  ],
} satisfies Config;
```

3. Import theme in `src/main.tsx`:

```tsx
import '@agenticindiedev/ui/themes/light.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Create React App

1. Install the package:

```bash
npm install @agenticindiedev/ui
```

2. Update `tailwind.config.js`:

```js
module.exports = {
  presets: [require('@agenticindiedev/ui/tailwind.preset')],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@agenticindiedev/ui/dist/**/*.{js,cjs}',
  ],
};
```

3. Import theme in `src/index.js`:

```js
import '@agenticindiedev/ui/themes/light.scss';
```

## Customization

### Method 1: Override CSS Variables (Recommended)

The easiest way to customize colors globally is by overriding CSS variables. This affects all components using those color tokens.

**Example: Change Button Primary Color to Green**

```css
/* In your global CSS file (e.g., globals.css, app.css) */
:root {
  --primary: 142 76% 36%; /* Your custom green */
  --primary-foreground: 0 0% 100%;
}
```

All buttons with `variant="primary"` will now use your custom green color.

**All Available CSS Variables:**

```css
:root {
  /* Primary Colors */
  --primary: 199.1 89.1% 48.2%;
  --primary-foreground: 210 40% 98%;

  /* Secondary Colors */
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;

  /* Accent Colors */
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;

  /* Destructive (Error) Colors */
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;

  /* Background & Text */
  --background: 0 0% 100%;
  --foreground: 222.2 47.4% 11.2%;

  /* Muted Colors */
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;

  /* Borders & Inputs */
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 199.1 89.1% 48.2%;

  /* Card Colors */
  --card: 0 0% 100%;
  --card-foreground: 222.2 47.4% 11.2%;

  /* Popover Colors */
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 47.4% 11.2%;

  /* Border Radius */
  --radius: 0.5rem;
}
```

### Method 2: Component-Specific Styling (className)

For one-off customizations, use the `className` prop:

```tsx
<Button
  variant="primary"
  className="bg-purple-500 hover:bg-purple-600 shadow-lg"
>
  Custom Purple Button
</Button>
```

### Method 3: Create Custom Theme File

Create your own theme CSS file with all your custom colors:

```css
/* my-theme.css */
@import 'tailwindcss';

:root {
  --primary: 142 76% 36%; /* Your brand color */
  --primary-foreground: 0 0% 100%;
  /* ... define all your colors */
  --radius: 0.75rem;
}

@keyframes accordion-down {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes accordion-up {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}
```

Then import it instead of the default theme:

```tsx
import './my-theme.css';
```

### Method 4: Tailwind Config Override

Extend colors in your `tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss';

export default {
  presets: [require('@agenticindiedev/ui/tailwind.preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10b981', // Your custom green
          foreground: '#ffffff',
        },
      },
    },
  },
} satisfies Config;
```

### Dark Mode Customization

Customize dark mode by adding styles to the `.dark` class:

```css
.dark {
  --primary: 142 76% 50%; /* Lighter for dark mode */
  --background: 222.2 47.4% 11.2%;
  --foreground: 210 40% 98%;
}
```

## Troubleshooting

### Components don't have styles

1. Make sure you've imported the theme SCSS file
2. Verify Tailwind is processing the library's content paths
3. Check that your build tool is processing SCSS files

### Theme not switching

1. Ensure you're importing the correct theme SCSS file
2. Call `initTheme()` on app load
3. Check that the `dark` class is being applied to the HTML element

### TypeScript errors

Make sure you have TypeScript 5.0+ and React types installed:

```bash
bun add -d typescript @types/react @types/react-dom
```

## Next Steps

- Browse the [Storybook documentation](https://agenticindiedev.github.io/ui/) for component examples
- Check the [README](./README.md) for component API documentation
- Explore component source code for advanced customization
