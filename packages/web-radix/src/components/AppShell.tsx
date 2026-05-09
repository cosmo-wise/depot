import React from 'react'

export interface AppShellProps {
  header?: React.ReactNode
  sidebar?: React.ReactNode
  children?: React.ReactNode
}

export function AppShell({ header, sidebar, children }: AppShellProps): React.ReactElement {
  return (
    <div className="depot-appshell">
      {header && <header className="depot-appshell__header">{header}</header>}
      <div className="depot-appshell__body">
        {sidebar && <aside className="depot-appshell__sidebar">{sidebar}</aside>}
        <main className="depot-appshell__main">{children}</main>
      </div>
    </div>
  )
}
