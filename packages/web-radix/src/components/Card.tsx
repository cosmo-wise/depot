import React from 'react'

export interface CardProps {
  children?: React.ReactNode
  className?: string
  title?: string
  footer?: React.ReactNode
}

export function Card({ children, className, title, footer }: CardProps): React.ReactElement {
  return (
    <div className={`depot-card${className ? ` ${className}` : ''}`}>
      {title && <div className="depot-card__header"><h3 className="depot-card__title">{title}</h3></div>}
      <div className="depot-card__body">{children}</div>
      {footer && <div className="depot-card__footer">{footer}</div>}
    </div>
  )
}
