'use client'

import { useState } from 'react'

interface Props {
  path: string
  sha: string | null
  onDelete: () => void
}

const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'])
const VIDEO_EXTS = new Set(['.mp4', '.mov'])

function ext(path: string) {
  return path.slice(path.lastIndexOf('.')).toLowerCase()
}

export function AssetViewer({ path, sha, onDelete }: Props) {
  const url = `/api/vault/asset?path=${encodeURIComponent(path)}`
  const name = path.split('/').pop() ?? path
  const e = ext(path)
  const isImage = IMAGE_EXTS.has(e)
  const isPdf = e === '.pdf'
  const isVideo = VIDEO_EXTS.has(e)
  const isZip = e === '.zip'
  const [loadError, setLoadError] = useState(false)

  return (
    <div className="flex-1 flex flex-col overflow-hidden min-w-0">
      {/* Asset toolbar */}
      <div
        className="h-10 flex items-center gap-3 px-3 shrink-0"
        style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface)' }}
      >
        <FileIcon ext={e} />
        <span
          className="text-sm font-medium truncate flex-1"
          style={{ color: 'var(--text-dim)' }}
          title={path}
        >
          {name}
        </span>
        <a
          href={url}
          download={name}
          className="btn-secondary text-xs"
        >
          ↓ Download
        </a>
        {sha && (
          <button
            onClick={onDelete}
            className="btn-ghost text-xs"
            style={{ color: '#ef4444' }}
          >
            Delete
          </button>
        )}
      </div>

      {/* Viewer area */}
      <div
        className="flex-1 overflow-auto flex items-center justify-center p-6"
        style={{ background: 'var(--surface-muted)' }}
      >
        {loadError && (
          <div className="text-center space-y-3">
            <div className="text-5xl opacity-50">⚠</div>
            <p className="font-semibold" style={{ color: 'var(--text)' }}>Failed to load file</p>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              The file may be too large, still deploying, or unavailable.
            </p>
            <a href={url} download={name} className="btn-primary text-sm inline-flex">
              ↓ Try downloading directly
            </a>
          </div>
        )}

        {!loadError && isImage && (
          <img
            src={url}
            alt={name}
            className="max-w-full max-h-full object-contain rounded-xl"
            style={{
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-soft)',
            }}
            onError={() => setLoadError(true)}
          />
        )}

        {!loadError && isPdf && (
          <iframe
            src={url}
            title={name}
            className="w-full rounded-xl"
            style={{
              height: 'calc(100vh - 200px)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-soft)',
              background: '#fff',
            }}
            onError={() => setLoadError(true)}
          />
        )}

        {!loadError && isVideo && (
          <video
            src={url}
            controls
            className="max-w-full max-h-full rounded-xl"
            style={{
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-soft)',
            }}
            onError={() => setLoadError(true)}
          />
        )}

        {isZip && (
          <div className="text-center space-y-4">
            <div className="text-6xl">📦</div>
            <p className="font-semibold text-lg" style={{ color: 'var(--text)' }}>{name}</p>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>ZIP archive — download to open</p>
            <a href={url} download={name} className="btn-primary text-sm inline-flex">
              ↓ Download
            </a>
          </div>
        )}

        {!isImage && !isPdf && !isVideo && !isZip && (
          <div className="text-center space-y-4">
            <div className="text-6xl">📎</div>
            <p className="font-semibold text-lg" style={{ color: 'var(--text)' }}>{name}</p>
            <a href={url} download={name} className="btn-primary text-sm inline-flex">
              ↓ Download
            </a>
          </div>
        )}
      </div>

      {/* Obsidian embed hint */}
      <div
        className="px-4 py-2 shrink-0 flex items-center gap-2"
        style={{ borderTop: '1px solid var(--border)', background: 'var(--surface-elevated)' }}
      >
        <span className="text-xs" style={{ color: 'var(--muted)' }}>
          Embed in markdown:
        </span>
        <code
          className="text-xs px-2 py-0.5 rounded-md select-all cursor-copy"
          style={{
            background: 'var(--surface-muted)',
            border: '1px solid var(--border)',
            color: 'var(--accent)',
            fontFamily: '"JetBrains Mono", monospace',
          }}
          onClick={e => {
            navigator.clipboard.writeText(`![[${name}]]`).catch(() => {})
            const el = e.currentTarget
            el.textContent = 'Copied!'
            setTimeout(() => { el.textContent = `![[${name}]]` }, 1500)
          }}
          title="Click to copy"
        >
          {`![[${name}]]`}
        </code>
      </div>
    </div>
  )
}

function FileIcon({ ext }: { ext: string }) {
  const icons: Record<string, string> = {
    '.pdf': '📄',
    '.png': '🖼',
    '.jpg': '🖼',
    '.jpeg': '🖼',
    '.gif': '🖼',
    '.svg': '🖼',
    '.webp': '🖼',
    '.mp4': '🎬',
    '.mov': '🎬',
    '.zip': '📦',
  }
  return (
    <span className="text-base leading-none" aria-hidden="true">
      {icons[ext] ?? '📎'}
    </span>
  )
}
