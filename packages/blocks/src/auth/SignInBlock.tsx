import React from 'react'
import { AppShell } from '@chariot/depot-web-radix'
import { Card } from '@chariot/depot-web-radix'
import { Button } from '@chariot/depot-web-radix'
import { TextField } from '@chariot/depot-web-radix'

export interface SignInBlockProps {
  onSignIn?: (email: string, password: string) => void
  title?: string
  showRegisterLink?: boolean
  onRegisterClick?: () => void
}

export function SignInBlock({ onSignIn, title = 'Sign In', showRegisterLink, onRegisterClick }: SignInBlockProps): React.ReactElement {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <AppShell>
      <div className="depot-block-auth">
        <Card className="depot-block-auth__card" title={title}>
          <form onSubmit={e => { e.preventDefault(); onSignIn?.(email, password) }}>
            <TextField label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            <TextField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            <Button type="submit" className="depot-block-auth__submit">Sign In</Button>
          </form>
          {showRegisterLink && (
            <p className="depot-block-auth__link">
              Don&apos;t have an account?{' '}
              <Button variant="ghost" onClick={onRegisterClick}>Register</Button>
            </p>
          )}
        </Card>
      </div>
    </AppShell>
  )
}
