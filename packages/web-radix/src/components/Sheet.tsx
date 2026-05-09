import React from 'react'

export interface SheetProps {
  open: boolean
  onClose: () => void
  side?: 'left' | 'right' | 'top' | 'bottom'
  children?: React.ReactNode
}

export function Sheet({ open, onClose, side = 'right', children }: SheetProps): React.ReactElement | null {
  if (!open) return null
  return React.createElement('div', { className: `depot-sheet depot-sheet--${side}`, role: 'dialog' },
    React.createElement('div', { className: 'depot-sheet__overlay', onClick: onClose }),
    React.createElement('div', { className: 'depot-sheet__content' }, children),
  )
}
