'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'

interface Props {
  content: string
}

function stripFrontmatter(text: string): string {
  if (!text.startsWith('---')) return text
  const end = text.indexOf('\n---', 3)
  if (end === -1) return text
  return text.slice(end + 4).trimStart()
}

export function Preview({ content }: Props) {
  const body = stripFrontmatter(content)

  return (
    <div
      className="px-8 py-7 min-h-full"
      style={{ fontFamily: 'Inter, ui-sans-serif, sans-serif', color: 'var(--text)' }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        components={{
          h1: ({ children }) => (
            <h1 style={{ color: 'var(--text)', fontSize: '2rem', fontWeight: 700, lineHeight: 1.1, margin: '0 0 1rem', maxWidth: '14ch' }}>
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 style={{ color: 'var(--text)', fontSize: '1.375rem', fontWeight: 600, borderTop: '1px solid var(--border)', paddingTop: '0.25rem', marginTop: '1.75rem', marginBottom: '0.75rem' }}>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 style={{ color: 'var(--teal)', fontSize: '1.1rem', fontWeight: 600, marginTop: '1.25rem', marginBottom: '0.5rem' }}>
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 style={{ color: 'var(--text-dim)', fontSize: '1rem', fontWeight: 600, marginTop: '1rem', marginBottom: '0.4rem' }}>
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.68, marginBottom: '1rem', maxWidth: '48rem' }}>
              {children}
            </p>
          ),
          code: ({ className, children }) => {
            const isBlock = !!className
            if (isBlock) {
              return (
                <code style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.88em' }}>
                  {children}
                </code>
              )
            }
            return (
              <code style={{
                background: 'var(--surface-muted)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                padding: '0.12em 0.34em',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.88em',
                color: 'var(--text)',
              }}>
                {children}
              </code>
            )
          },
          pre: ({ children }) => (
            <pre style={{
              background: 'var(--code-bg)',
              color: 'var(--code-text)',
              border: '1px solid var(--border-strong)',
              borderRadius: '8px',
              padding: '1rem',
              overflowX: 'auto',
              fontSize: '0.88em',
              marginBottom: '1.25rem',
            }}>
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote style={{
              margin: '1.5rem 0',
              padding: '1rem 1.15rem',
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border)',
              borderLeft: '4px solid var(--teal)',
              borderRadius: '8px',
              color: 'var(--text-dim)',
              maxWidth: '48rem',
            }}>
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => (
            <a href={href} style={{ color: 'var(--accent)', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
          table: ({ children }) => (
            <div style={{ overflowX: 'auto', marginBottom: '1.25rem' }}>
              <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, border: '1px solid var(--border)', borderRadius: '8px', background: 'var(--surface-elevated)' }}>
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th style={{ padding: '0.7rem 0.85rem', background: 'var(--surface-muted)', fontWeight: 650, borderBottom: '1px solid var(--border)', textAlign: 'left', color: 'var(--text)' }}>
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td style={{ padding: '0.7rem 0.85rem', borderBottom: '1px solid var(--border)', color: 'var(--text-dim)' }}>
              {children}
            </td>
          ),
          hr: () => (
            <hr style={{ border: 0, borderTop: '1px solid var(--border)', margin: '2rem 0' }} />
          ),
          ul: ({ children }) => (
            <ul style={{ paddingLeft: '1.35rem', marginBottom: '1rem', color: 'var(--text-dim)', maxWidth: '48rem' }}>
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol style={{ paddingLeft: '1.35rem', marginBottom: '1rem', color: 'var(--text-dim)', maxWidth: '48rem' }}>
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li style={{ marginBottom: '0.25rem', lineHeight: 1.65 }}>{children}</li>
          ),
          img: ({ src, alt }) => (
            <img src={src} alt={alt ?? ''} style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid var(--border)', display: 'block', marginBottom: '1rem' }} />
          ),
          strong: ({ children }) => (
            <strong style={{ color: 'var(--text)', fontWeight: 650 }}>{children}</strong>
          ),
        }}
      >
        {body}
      </ReactMarkdown>
    </div>
  )
}
