'use client'

import { useState, FormEvent, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { AuthLayout } from '@/components/AuthLayout'

function ResetForm() {
  const params = useSearchParams()
  const token = params.get('token') ?? ''
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!token) {
    return (
      <AuthLayout subtitle="Invalid link">
        <p className="text-sm text-center mb-4" style={{ color: 'var(--muted)' }}>
          This reset link is missing or malformed.
        </p>
        <Link
          href="/forgot-password"
          className="btn-primary w-full justify-center"
        >
          Request a new link
        </Link>
      </AuthLayout>
    )
  }

  async function submit(e: FormEvent) {
    e.preventDefault()
    if (password !== confirm) { setError('Passwords do not match'); return }
    if (password.length < 12) { setError('Password must be at least 12 characters'); return }
    setError('')
    setLoading(true)

    try {
      const r = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      })

      if (r.ok) {
        setDone(true)
      } else {
        const { error: msg } = await r.json()
        setError(msg ?? 'Reset failed')
      }
    } catch {
      setError('Network error — please try again')
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return (
      <AuthLayout subtitle="Almost there">
        <div className="space-y-3 text-sm" style={{ color: 'var(--text-dim)' }}>
          <p>
            Your new password hash has been emailed to you. Follow these steps:
          </p>
          <ol className="space-y-1.5 pl-4 list-decimal">
            <li>Open the email from Vault Admin</li>
            <li>
              Go to Vercel → Project → <strong style={{ color: 'var(--text)' }}>Settings → Environment Variables</strong>
            </li>
            <li>
              Update <code style={{ background: 'var(--surface-muted)', padding: '1px 5px', borderRadius: '4px', fontFamily: 'monospace', fontSize: '0.85em' }}>ADMIN_PASSWORD_HASH</code>
            </li>
            <li>
              Go to <strong style={{ color: 'var(--text)' }}>Deployments → Redeploy</strong>
            </li>
          </ol>
          <div className="pt-2 text-center">
            <Link href="/login" style={{ color: 'var(--accent)' }}>
              ← Back to login
            </Link>
          </div>
        </div>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout subtitle="Choose a new password">
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium mb-1.5"
            style={{ color: 'var(--text-dim)' }}
          >
            New password
          </label>
          <input
            id="password"
            type="password"
            className="input"
            value={password}
            onChange={e => setPassword(e.target.value)}
            minLength={12}
            required
            autoFocus
          />
          <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
            Minimum 12 characters
          </p>
        </div>
        <div>
          <label
            htmlFor="confirm"
            className="block text-sm font-medium mb-1.5"
            style={{ color: 'var(--text-dim)' }}
          >
            Confirm password
          </label>
          <input
            id="confirm"
            type="password"
            className="input"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
            required
          />
        </div>

        {error && (
          <p className="text-sm rounded-lg px-3 py-2" style={{ color: '#ef4444', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
            {error}
          </p>
        )}

        <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
          {loading ? 'Resetting…' : 'Set new password'}
        </button>
      </form>
    </AuthLayout>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<AuthLayout><p style={{ color: 'var(--muted)', textAlign: 'center' }}>Loading…</p></AuthLayout>}>
      <ResetForm />
    </Suspense>
  )
}
