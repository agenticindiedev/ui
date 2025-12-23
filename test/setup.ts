// Must register happy-dom globals first, before any other imports
import { GlobalRegistrator } from '@happy-dom/global-registrator';
GlobalRegistrator.register();

// Now we can import testing utilities that depend on global document
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'bun:test';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend bun:test expect with jest-dom matchers
expect.extend(matchers);

// Clean up after each test
afterEach(() => {
  cleanup();
});
