'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { AuthLayout } from '@/components/AuthLayout'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function submit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    }).catch(() => {})
    setSent(true)
    setLoading(false)
  }

  if (sent) {
    return (
      <AuthLayout subtitle="Check your inbox">
        <div className="text-center space-y-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mx-auto text-2xl"
            style={{ background: 'var(--accent-soft)' }}
          >
            ✉
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
            If that email matches the admin account, you&apos;ll receive a reset link within a minute.
          </p>
          <Link
            href="/login"
            className="inline-block text-sm transition-colors"
            style={{ color: 'var(--accent)' }}
          >
            ← Back to login
          </Link>
        </div>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout subtitle="Enter your email to receive a reset link">
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

        <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
          {loading ? 'Sending…' : 'Send reset link'}
        </button>

        <p className="text-center">
          <Link href="/login" className="text-sm" style={{ color: 'var(--muted)' }}>
            ← Back to login
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}
