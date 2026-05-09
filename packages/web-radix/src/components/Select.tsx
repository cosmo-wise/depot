import React from 'react'

export interface SelectOption {
  label: string
  value: string
}

export interface SelectProps {
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
}

export function Select({ options, value, onChange, placeholder, disabled }: SelectProps): React.ReactElement {
  const [isOpen, setIsOpen] = React.useState(false)
  const [internalValue, setInternalValue] = React.useState(value ?? '')
  const current = value ?? internalValue
  const selected = options.find(o => o.value === current)

  return (
    <div className="depot-select">
      <button
        className="depot-select__trigger"
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{selected?.label ?? placeholder ?? 'Select...'}</span>
        <span className="depot-select__chevron">▾</span>
      </button>
      {isOpen && (
        <ul className="depot-select__menu" role="listbox">
          {options.map(option => (
            <li
              key={option.value}
              className={`depot-select__option${option.value === current ? ' depot-select__option--selected' : ''}`}
              role="option"
              aria-selected={option.value === current}
              onClick={() => {
                setInternalValue(option.value)
                setIsOpen(false)
                onChange?.(option.value)
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
