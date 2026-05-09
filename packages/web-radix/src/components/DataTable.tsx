import React from 'react'

export interface DataTableColumn<T> {
  key: string
  header: string
  render?: (row: T) => React.ReactNode
  sortable?: boolean
}

export interface DataTableProps<T> {
  columns: DataTableColumn<T>[]
  rows: T[]
  keyField: keyof T
  emptyMessage?: string
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  rows,
  keyField,
  emptyMessage,
}: DataTableProps<T>): React.ReactElement {
  if (rows.length === 0) {
    return (
      <div className="depot-datatable depot-datatable--empty" role="table" aria-label="data table">
        <p className="depot-datatable__empty-message">{emptyMessage ?? 'No data available.'}</p>
      </div>
    )
  }

  return (
    <div className="depot-datatable" role="table" aria-label="data table">
      <table>
        <thead>
          <tr role="row">
            {columns.map(col => (
              <th key={col.key} role="columnheader" className={col.sortable ? 'depot-datatable__sortable' : ''}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={String(row[keyField] ?? rowIndex)} role="row">
              {columns.map(col => (
                <td key={col.key} role="cell">
                  {col.render ? col.render(row) : String(row[col.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
