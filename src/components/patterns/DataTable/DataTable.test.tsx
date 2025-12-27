import { render } from '@testing-library/react';
import { describe, expect, it } from 'bun:test';
import type { ColumnDef } from '@tanstack/react-table';
import { DataTable } from './DataTable';

interface TestData {
  id: string;
  name: string;
  email: string;
}

const testData: TestData[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com' },
];

const columns: ColumnDef<TestData>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
];

describe('DataTable', () => {
  it('renders table element', () => {
    const { container } = render(
      <DataTable columns={columns} data={testData} />
    );
    expect(container.querySelector('table')).toBeTruthy();
  });

  it('renders column headers', () => {
    const { getByText } = render(
      <DataTable columns={columns} data={testData} />
    );
    expect(getByText('Name')).toBeTruthy();
    expect(getByText('Email')).toBeTruthy();
  });

  it('renders data rows', () => {
    const { getByText } = render(
      <DataTable columns={columns} data={testData} />
    );
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('jane@example.com')).toBeTruthy();
  });

  it('shows no results message when data is empty', () => {
    const { getByText } = render(<DataTable columns={columns} data={[]} />);
    expect(getByText('No results.')).toBeTruthy();
  });

  it('renders pagination by default', () => {
    const { getByText } = render(
      <DataTable columns={columns} data={testData} />
    );
    expect(getByText('Previous')).toBeTruthy();
    expect(getByText('Next')).toBeTruthy();
  });

  it('hides pagination when disabled', () => {
    const { queryByText } = render(
      <DataTable columns={columns} data={testData} pagination={false} />
    );
    expect(queryByText('Previous')).toBeNull();
    expect(queryByText('Next')).toBeNull();
  });

  it('renders search input when searchable', () => {
    const { container } = render(
      <DataTable columns={columns} data={testData} searchable />
    );
    expect(container.querySelector('input')).toBeTruthy();
  });

  it('hides search input by default', () => {
    const { container } = render(
      <DataTable columns={columns} data={testData} />
    );
    expect(container.querySelector('input')).toBeNull();
  });

  it('uses custom search placeholder', () => {
    const { getByPlaceholderText } = render(
      <DataTable
        columns={columns}
        data={testData}
        searchable
        searchPlaceholder="Find users..."
      />
    );
    expect(getByPlaceholderText('Find users...')).toBeTruthy();
  });

  it('applies custom className', () => {
    const { container } = render(
      <DataTable columns={columns} data={testData} className="custom-table" />
    );
    expect(container.querySelector('.custom-table')).toBeTruthy();
  });

  it('shows row selection count', () => {
    const { getByText } = render(
      <DataTable columns={columns} data={testData} />
    );
    expect(getByText(/0 of 3 row\(s\) selected/)).toBeTruthy();
  });

  it('renders all rows', () => {
    const { container } = render(
      <DataTable columns={columns} data={testData} />
    );
    const rows = container.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3);
  });

  it('disables previous button on first page', () => {
    const { getByText } = render(
      <DataTable columns={columns} data={testData} />
    );
    const prevButton = getByText('Previous');
    expect((prevButton as HTMLButtonElement).disabled).toBe(true);
  });

  it('renders with single column', () => {
    const singleColumn: ColumnDef<TestData>[] = [
      { accessorKey: 'name', header: 'Name' },
    ];
    const { getByText } = render(
      <DataTable columns={singleColumn} data={testData} />
    );
    expect(getByText('Name')).toBeTruthy();
  });

  it('renders with many rows', () => {
    const manyRows = Array.from({ length: 50 }, (_, i) => ({
      id: String(i),
      name: `User ${i}`,
      email: `user${i}@example.com`,
    }));
    const { container } = render(
      <DataTable columns={columns} data={manyRows} />
    );
    expect(container.querySelector('table')).toBeTruthy();
  });
});
