'use client'

import { useEffect } from 'react'

interface Props {
  children: React.ReactNode
  title?: string
  subtitle?: string
}

export function AuthLayout({ children, title = 'Vault Admin', subtitle }: Props) {
  // Sync theme on mount (matches Quartz localStorage key)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('saved-theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } catch {}
  }, [])

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: 'var(--surface)' }}
    >
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4"
            style={{ background: 'var(--accent)', color: '#fff', fontSize: '18px' }}
          >
            ✦
          </div>
          <h1
            className="text-2xl font-bold tracking-tight"
            style={{ color: 'var(--text)' }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>
              {subtitle}
            </p>
          )}
        </div>
        <div
          className="rounded-2xl p-7"
          style={{
            background: 'var(--surface-elevated)',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-soft)',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
