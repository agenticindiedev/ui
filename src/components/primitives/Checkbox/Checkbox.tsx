import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import type { CheckboxProps } from './Checkbox.types';

export const checkboxVariants = cva(
  'shrink-0 rounded border bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-primary-500 checked:border-primary-500 dark:bg-gray-900 dark:checked:bg-primary-600 dark:checked:border-primary-600',
  {
    variants: {
      variant: {
        default: 'border-gray-300 dark:border-gray-700',
        error: 'border-red-500 dark:border-red-500',
      },
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { className, variant, size, label, description, error, id, ...props },
    ref
  ) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;

    return (
      <div className="flex items-start gap-3">
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          className={cn(
            checkboxVariants({ variant: error ? 'error' : variant, size }),
            className
          )}
          aria-invalid={error}
          {...props}
        />
        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <label
                htmlFor={checkboxId}
                className="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer"
              >
                {label}
              </label>
            )}
            {description && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {description}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
