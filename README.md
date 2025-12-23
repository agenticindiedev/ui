# IndieUI

A modern React component library built with TypeScript, Tailwind CSS v4, and class-variance-authority.

## Installation

```bash
bun add @indieui/components
```

## Setup

### 1. Install dependencies

```bash
bun run pre:install
```

This command updates all dependencies to their latest versions and runs the build.

### 2. Development

Start the Storybook development server:

```bash
bun dev
```

This launches Storybook at `http://localhost:6006` where you can preview and develop components.

## Scripts

| Command                  | Description                            |
| ------------------------ | -------------------------------------- |
| `bun dev`                | Start Storybook development server     |
| `bun run build`          | Build the library for production       |
| `bun run build:lib`      | Build only the JS/TS bundle            |
| `bun run build:css`      | Build only the CSS bundle              |
| `bun run pre:install`    | Update dependencies and rebuild        |
| `bun run prepare:deploy` | Format, lint, and build for deployment |
| `bun run format:check`   | Check code formatting                  |
| `bun run format:fix`     | Fix code formatting                    |
| `bun run lint:check`     | Check for linting errors               |
| `bun run lint:fix`       | Fix linting errors                     |
| `bun test`               | Run tests                              |
| `bun run typecheck`      | Run TypeScript type checking           |

## Usage

```tsx
import { Button, Card, CardHeader, CardContent } from '@indieui/components';
import '@indieui/components/styles.css';

function App() {
  return (
    <Card>
      <CardHeader>Welcome</CardHeader>
      <CardContent>
        <Button variant="primary" size="md">
          Click me
        </Button>
      </CardContent>
    </Card>
  );
}
```

## Components

### Primitives

- **Badge** - Status indicators and labels
- **Button** - Interactive buttons with variants
- **Card** - Container component with header, content, and footer
- **Checkbox** - Checkbox input with label support
- **Input** - Text input fields
- **Select** - Dropdown select component

## Tech Stack

- **React 19** - UI framework
- **TypeScript 5.9** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **Vite 7** - Build tool
- **Storybook 10** - Component development
- **Bun** - Package manager and runtime

## Project Structure

```
src/
├── components/
│   └── primitives/       # Base UI components
│       ├── Badge/
│       ├── Button/
│       ├── Card/
│       ├── Checkbox/
│       ├── Input/
│       └── Select/
├── styles/
│   └── globals.css       # Tailwind CSS entry point
├── utils/
│   └── cn.ts             # Class name utility
└── index.ts              # Public exports
```

## License

MIT
