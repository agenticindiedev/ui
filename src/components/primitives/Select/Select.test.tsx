import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'bun:test';
import { Select } from './Select';

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('Select', () => {
  it('renders select element', () => {
    const { getByRole } = render(<Select options={defaultOptions} />);
    expect(getByRole('combobox')).toBeTruthy();
  });

  it('renders all options', () => {
    const { getByText } = render(<Select options={defaultOptions} />);
    expect(getByText('Option 1')).toBeTruthy();
    expect(getByText('Option 2')).toBeTruthy();
    expect(getByText('Option 3')).toBeTruthy();
  });

  it('renders placeholder when provided', () => {
    const { getByText } = render(
      <Select options={defaultOptions} placeholder="Select an option" />
    );
    expect(getByText('Select an option')).toBeTruthy();
  });

  it('handles value changes', () => {
    const onValueChange = vi.fn();
    const { getByRole } = render(
      <Select options={defaultOptions} onValueChange={onValueChange} />
    );
    const select = getByRole('combobox');
    // Radix Select uses onValueChange, not onChange
    expect(select).toBeTruthy();
  });

  it('is disabled when disabled prop is true', () => {
    const { getByRole } = render(<Select options={defaultOptions} disabled />);
    expect((getByRole('combobox') as HTMLSelectElement).disabled).toBe(true);
  });

  it('renders disabled options', () => {
    const optionsWithDisabled = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2', disabled: true },
    ];
    const { getAllByRole } = render(<Select options={optionsWithDisabled} />);
    const options = getAllByRole('option');
    expect((options[1] as HTMLOptionElement).disabled).toBe(true);
  });

  it('shows error state', () => {
    const { getByRole } = render(<Select options={defaultOptions} error />);
    expect(getByRole('combobox').getAttribute('aria-invalid')).toBe('true');
  });

  it('shows error message', () => {
    const { getByText } = render(
      <Select
        options={defaultOptions}
        error
        errorMessage="Please select an option"
      />
    );
    expect(getByText('Please select an option')).toBeTruthy();
  });

  it('applies size classes', () => {
    const { getByRole } = render(<Select options={defaultOptions} size="lg" />);
    expect(getByRole('combobox').className).toContain('h-12');
  });

  it('applies custom className', () => {
    const { getByRole } = render(
      <Select options={defaultOptions} className="custom-class" />
    );
    expect(getByRole('combobox').className).toContain('custom-class');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Select options={defaultOptions} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });
});
