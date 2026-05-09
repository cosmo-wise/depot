import React from 'react'

export interface EmptyStateProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  action?: {
    label: string
    onClick: () => void
  }
  children?: React.ReactNode
}

export function EmptyState({ title, description, icon, action, children }: EmptyStateProps): React.ReactElement {
  return (
    <div className="depot-emptystate">
      {icon && <div className="depot-emptystate__icon">{icon}</div>}
      {title && <h3 className="depot-emptystate__title">{title}</h3>}
      {description && <p className="depot-emptystate__description">{description}</p>}
      {action && (
        <button className="depot-btn depot-btn--primary" onClick={action.onClick}>
          {action.label}
        </button>
      )}
      {children}
    </div>
  )
}
