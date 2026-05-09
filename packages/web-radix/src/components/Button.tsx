import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ variant = 'primary', size = 'md', children, className, ...props }: ButtonProps): React.ReactElement {
  return (
    <button className={`depot-btn depot-btn--${variant} depot-btn--${size}${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </button>
  )
}
