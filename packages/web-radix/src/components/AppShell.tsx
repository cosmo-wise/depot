import React from 'react'

export interface AppShellProps {
  header?: React.ReactNode
  sidebar?: React.ReactNode
  children?: React.ReactNode
}

export function AppShell({ header, sidebar, children }: AppShellProps): React.ReactElement {
  return React.createElement('div', { className: 'depot-appshell' },
    header ? React.createElement('header', { className: 'depot-appshell__header' }, header) : null,
    React.createElement('div', { className: 'depot-appshell__body' },
      sidebar ? React.createElement('aside', { className: 'depot-appshell__sidebar' }, sidebar) : null,
      React.createElement('main', { className: 'depot-appshell__main' }, children),
    ),
  )
}
