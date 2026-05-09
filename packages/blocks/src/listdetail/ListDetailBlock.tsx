import React from 'react'
import { AppShell } from '@chariot/depot-web-radix'
import { Card } from '@chariot/depot-web-radix'
import { TextField } from '@chariot/depot-web-radix'

interface ListDetailItem {
  id: string
  [key: string]: unknown
}

export interface ListDetailBlockProps<T extends ListDetailItem> {
  items: T[]
  columns: { key: string; header: string }[]
  selectedId?: string
  onSelect?: (item: T) => void
  searchPlaceholder?: string
  renderDetail?: (item: T) => React.ReactNode
  emptyMessage?: string
}

export function ListDetailBlock<T extends ListDetailItem>({
  items,
  columns,
  selectedId,
  onSelect,
  searchPlaceholder = 'Search...',
  renderDetail,
  emptyMessage,
}: ListDetailBlockProps<T>): React.ReactElement {
  const [search, setSearch] = React.useState('')
  const filtered = items.filter(item =>
    columns.some(col => String(item[col.key] ?? '').toLowerCase().includes(search.toLowerCase()))
  )
  const selected = items.find(i => i.id === selectedId)

  return (
    <AppShell>
      <div className="depot-block-listdetail">
        <div className="depot-block-listdetail__list">
          <TextField placeholder={searchPlaceholder} value={search} onChange={e => setSearch(e.target.value)} />
          <div className="depot-block-listdetail__items">
            {filtered.map(item => (
              <Card
                key={item.id}
                className={`depot-block-listdetail__item${item.id === selectedId ? ' depot-block-listdetail__item--selected' : ''}`}
              >
                <button className="depot-block-listdetail__item-trigger" onClick={() => onSelect?.(item)}>
                  {columns.map(col => (
                    <span key={col.key} className="depot-block-listdetail__item-field">
                      <span className="depot-block-listdetail__item-label">{col.header}:</span>
                      <span>{String(item[col.key] ?? '')}</span>
                    </span>
                  ))}
                </button>
              </Card>
            ))}
          </div>
        </div>
        <div className="depot-block-listdetail__detail">
          {selected && renderDetail ? renderDetail(selected) : (
            <Card title="Details">
              <p>{emptyMessage ?? 'Select an item to view details.'}</p>
            </Card>
          )}
        </div>
      </div>
    </AppShell>
  )
}
