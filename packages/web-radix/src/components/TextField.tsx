import React from 'react'

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function TextField({ label, error, ...props }: TextFieldProps): React.ReactElement {
  return React.createElement('div', { className: 'depot-textfield' },
    label ? React.createElement('label', { className: 'depot-textfield__label' }, label) : null,
    React.createElement('input', { className: 'depot-textfield__input', ...props }),
    error ? React.createElement('span', { className: 'depot-textfield__error' }, error) : null,
  )
}
