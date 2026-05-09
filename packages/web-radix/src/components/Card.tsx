import React from 'react'

export interface CardProps {
  children?: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps): React.ReactElement {
  return React.createElement('div', { className: `depot-card${className ? ` ${className}` : ''}` }, children)
}
