import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import type {
  CardProps,
  CardHeaderProps,
  CardContentProps,
  CardFooterProps,
} from './Card.types';

export const cardVariants = cva(
  'rounded-lg border bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100',
  {
    variants: {
      variant: {
        default: 'border-gray-200 dark:border-gray-700',
        elevated: 'border-gray-200 shadow-md dark:border-gray-700',
        outline: 'border-gray-300 dark:border-gray-600',
      },
      hover: {
        true: 'transition-all hover:border-primary-500 hover:shadow-lg cursor-pointer',
        false: '',
      },
      padding: {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      hover: false,
      padding: 'none',
    },
  }
);

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, hover, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, hover, padding }), className)}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col space-y-1.5 p-6', className)}
        {...props}
      />
    );
  }
);
CardHeader.displayName = 'CardHeader';

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />;
  }
);
CardContent.displayName = 'CardContent';

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center p-6 pt-0', className)}
        {...props}
      />
    );
  }
);
CardFooter.displayName = 'CardFooter';
