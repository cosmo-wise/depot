import React from 'react'

export interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children?: React.ReactNode
}

export function Dialog({ open, onClose, title, children }: ModalProps): React.ReactElement | null {
  if (!open) return null
  return React.createElement('div', { className: 'depot-dialog', role: 'dialog', 'aria-modal': true },
    React.createElement('div', { className: 'depot-dialog__overlay', onClick: onClose }),
    React.createElement('div', { className: 'depot-dialog__content' },
      title ? React.createElement('h2', { className: 'depot-dialog__title' }, title) : null,
      children,
    ),
  )
}
