'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { AuthLayout } from '@/components/AuthLayout'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const r = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (r.ok) {
        router.push('/')
        router.refresh()
      } else {
        const { error: msg } = await r.json()
        setError(msg ?? 'Login failed')
      }
    } catch {
      setError('Network error — please try again')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout subtitle="Sign in to edit your vault">
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-1.5"
            style={{ color: 'var(--text-dim)' }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="input"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
            required
            autoFocus
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium mb-1.5"
            style={{ color: 'var(--text-dim)' }}
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="input"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>

        {error && (
          <p className="text-sm rounded-lg px-3 py-2" style={{ color: '#ef4444', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
            {error}
          </p>
        )}

        <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
          {loading ? 'Signing in…' : 'Sign in'}
        </button>

        <p className="text-center">
          <Link
            href="/forgot-password"
            className="text-sm transition-colors"
            style={{ color: 'var(--accent)' }}
          >
            Forgot password?
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}
