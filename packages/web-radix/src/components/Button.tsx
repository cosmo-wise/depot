import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ variant = 'primary', size = 'md', ...props }: ButtonProps): React.ReactElement {
  return React.createElement('button', { className: `depot-btn depot-btn--${variant} depot-btn--${size}`, ...props })
}
