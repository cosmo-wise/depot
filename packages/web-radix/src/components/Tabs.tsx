import React from 'react'

export interface TabsProps {
  items: { id: string; label: string; content: React.ReactNode }[]
  active?: string
  onChange?: (id: string) => void
}

export function Tabs({ items, active, onChange }: TabsProps): React.ReactElement {
  const [selected, setSelected] = React.useState(active ?? items[0]?.id ?? '')
  const current = active ?? selected
  return (
    <div className="depot-tabs">
      <div className="depot-tabs__list" role="tablist">
        {items.map(item => (
          <button
            key={item.id}
            role="tab"
            className={`depot-tabs__tab${current === item.id ? ' depot-tabs__tab--active' : ''}`}
            onClick={() => { setSelected(item.id); onChange?.(item.id) }}
            aria-selected={current === item.id}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="depot-tabs__panel" role="tabpanel">
        {items.find(i => i.id === current)?.content}
      </div>
    </div>
  )
}
