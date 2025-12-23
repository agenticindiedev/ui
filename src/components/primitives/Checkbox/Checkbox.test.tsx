import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'bun:test';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders checkbox element', () => {
    const { getByRole } = render(<Checkbox />);
    expect(getByRole('checkbox')).toBeTruthy();
  });

  it('renders label when provided', () => {
    const { getByText } = render(<Checkbox label="Accept terms" />);
    expect(getByText('Accept terms')).toBeTruthy();
  });

  it('renders description when provided', () => {
    const { getByText } = render(
      <Checkbox description="Please read the terms carefully" />
    );
    expect(getByText('Please read the terms carefully')).toBeTruthy();
  });

  it('renders both label and description', () => {
    const { getByText } = render(
      <Checkbox label="Accept terms" description="Required for signup" />
    );
    expect(getByText('Accept terms')).toBeTruthy();
    expect(getByText('Required for signup')).toBeTruthy();
  });

  it('handles change events', () => {
    const onChange = vi.fn();
    const { getByRole } = render(<Checkbox onChange={onChange} />);
    getByRole('checkbox').click();
    expect(onChange).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is true', () => {
    const { getByRole } = render(<Checkbox disabled />);
    expect((getByRole('checkbox') as HTMLInputElement).disabled).toBe(true);
  });

  it('can be checked by default', () => {
    const { getByRole } = render(<Checkbox defaultChecked />);
    expect((getByRole('checkbox') as HTMLInputElement).checked).toBe(true);
  });

  it('shows error state', () => {
    const { getByRole } = render(<Checkbox error />);
    expect(getByRole('checkbox').getAttribute('aria-invalid')).toBe('true');
  });

  it('applies size classes', () => {
    const { getByRole } = render(<Checkbox size="lg" />);
    expect(getByRole('checkbox').className).toContain('h-6');
  });

  it('applies custom className', () => {
    const { getByRole } = render(<Checkbox className="custom-class" />);
    expect(getByRole('checkbox').className).toContain('custom-class');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Checkbox ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('uses provided id', () => {
    const { getByRole } = render(
      <Checkbox id="my-checkbox" label="My checkbox" />
    );
    expect(getByRole('checkbox').id).toBe('my-checkbox');
  });

  it('label is clickable and toggles checkbox', () => {
    const { getByText, getByRole } = render(<Checkbox label="Click me" />);
    const label = getByText('Click me');
    label.click();
    expect((getByRole('checkbox') as HTMLInputElement).checked).toBe(true);
  });
});
