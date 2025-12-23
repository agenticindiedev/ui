import type { VariantProps } from 'class-variance-authority';
import type { checkboxVariants } from './Checkbox';

export interface CheckboxProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  description?: string;
  error?: boolean;
}
