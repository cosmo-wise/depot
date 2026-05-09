import React from 'react'

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function TextField({ label, error, className, id, ...props }: TextFieldProps): React.ReactElement {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="depot-textfield">
      {label && <label className="depot-textfield__label" htmlFor={inputId}>{label}</label>}
      <input id={inputId} className={`depot-textfield__input${className ? ` ${className}` : ''}`} {...props} />
      {error && <span className="depot-textfield__error">{error}</span>}
    </div>
  )
}
