import React from 'react'

export interface SheetProps {
  open: boolean
  onClose: () => void
  side?: 'left' | 'right' | 'top' | 'bottom'
  children?: React.ReactNode
}

export function Sheet({ open, onClose, side = 'right', children }: SheetProps): React.ReactElement | null {
  if (!open) return null
  return (
    <div className={`depot-sheet depot-sheet--${side}`} role="dialog">
      <div className="depot-sheet__overlay" onClick={onClose} />
      <div className="depot-sheet__content">{children}</div>
    </div>
  )
}
