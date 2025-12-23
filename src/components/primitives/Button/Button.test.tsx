import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'bun:test';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    const { getByRole } = render(<Button>Click me</Button>);
    expect(getByRole('button').textContent).toBe('Click me');
  });

  it('handles click events', () => {
    const onClick = vi.fn();
    const { getByRole } = render(<Button onClick={onClick}>Click</Button>);
    getByRole('button').click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when loading', () => {
    const { getByRole } = render(<Button isLoading>Loading</Button>);
    expect((getByRole('button') as HTMLButtonElement).disabled).toBe(true);
  });

  it('is disabled when disabled prop is true', () => {
    const { getByRole } = render(<Button disabled>Disabled</Button>);
    expect((getByRole('button') as HTMLButtonElement).disabled).toBe(true);
  });

  it('shows spinner when loading', () => {
    const { getByRole } = render(<Button isLoading>Loading</Button>);
    expect(getByRole('button').querySelector('svg')).toBeTruthy();
  });

  it('renders left icon', () => {
    const { getByTestId } = render(
      <Button leftIcon={<span data-testid="left-icon">L</span>}>Text</Button>
    );
    expect(getByTestId('left-icon')).toBeTruthy();
  });

  it('renders right icon', () => {
    const { getByTestId } = render(
      <Button rightIcon={<span data-testid="right-icon">R</span>}>Text</Button>
    );
    expect(getByTestId('right-icon')).toBeTruthy();
  });

  it('applies variant classes', () => {
    const { getByRole } = render(<Button variant="destructive">Delete</Button>);
    expect(getByRole('button').className).toContain('bg-red');
  });

  it('applies size classes', () => {
    const { getByRole } = render(<Button size="lg">Large</Button>);
    expect(getByRole('button').className).toContain('h-12');
  });

  it('applies custom className', () => {
    const { getByRole } = render(
      <Button className="custom-class">Custom</Button>
    );
    expect(getByRole('button').className).toContain('custom-class');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Button ref={ref}>Ref</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
