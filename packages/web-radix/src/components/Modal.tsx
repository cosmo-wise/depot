import React from 'react'

export interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children?: React.ReactNode
}

export function Dialog({ open, onClose, title, children }: ModalProps): React.ReactElement | null {
  if (!open) return null
  return (
    <div className="depot-dialog" role="dialog" aria-modal="true">
      <div className="depot-dialog__overlay" onClick={onClose} />
      <div className="depot-dialog__content">
        {title && <h2 className="depot-dialog__title">{title}</h2>}
        {children}
      </div>
    </div>
  )
}
