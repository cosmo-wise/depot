import React from 'react'

export interface ToastItem {
  id: string
  title?: string
  description: string
  variant?: 'default' | 'success' | 'error' | 'warning'
  duration?: number
}

export interface ToastProviderProps {
  children: React.ReactNode
}

const ToastContext = React.createContext<{
  toasts: ToastItem[]
  addToast: (toast: Omit<ToastItem, 'id'>) => void
  removeToast: (id: string) => void
}>({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
})

export function useToast() {
  return React.useContext(ToastContext)
}

export function ToastProvider({ children }: ToastProviderProps): React.ReactElement {
  const [toasts, setToasts] = React.useState<ToastItem[]>([])
  const counter = React.useRef(0)

  const addToast = React.useCallback((toast: Omit<ToastItem, 'id'>) => {
    const id = `toast-${++counter.current}`
    setToasts(prev => [...prev, { ...toast, id }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, toast.duration ?? 5000)
  }, [])

  const removeToast = React.useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className="depot-toast-container" aria-live="polite">
        {toasts.map(toast => (
          <div key={toast.id} className={`depot-toast depot-toast--${toast.variant ?? 'default'}`}>
            {toast.title && <div className="depot-toast__title">{toast.title}</div>}
            <div className="depot-toast__description">{toast.description}</div>
            <button className="depot-toast__close" onClick={() => removeToast(toast.id)} aria-label="Close">
              ×
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
