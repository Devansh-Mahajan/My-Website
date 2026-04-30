'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import dynamic from 'next/dynamic'
import { FileTree, TreeNode } from '@/components/FileTree'
import { Preview } from '@/components/Preview'
import { FrontmatterPanel } from '@/components/FrontmatterPanel'
import { AssetViewer } from '@/components/AssetViewer'
import { canEdit } from '@/lib/vault-paths'

const Editor = dynamic(() => import('@/components/Editor'), { ssr: false })

type Toast = { type: 'success' | 'error'; msg: string }

function flattenTree(nodes: TreeNode[]): string[] {
  const out: string[] = []
  for (const n of nodes) {
    if (n.type === 'blob') out.push(n.path)
    else if (n.children) out.push(...flattenTree(n.children))
  }
  return out
}

export default function AdminPage() {
  const [tree, setTree] = useState<TreeNode[]>([])
  const [treeLoading, setTreeLoading] = useState(true)
  const [selectedPath, setSelectedPath] = useState<string | null>(null)
  const [content, setContent] = useState('')
  const [savedContent, setSavedContent] = useState('')
  const [sha, setSha] = useState<string | null>(null)
  const [fileLoading, setFileLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState<Toast | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [previewOpen, setPreviewOpen] = useState(true)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [showNewFile, setShowNewFile] = useState(false)
  const [showUpload, setShowUpload] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [viewMode, setViewMode] = useState<'edit' | 'asset'>('edit')
  const [newFilePath, setNewFilePath] = useState('')
  const [uploadFile, setUploadFile] = useState<File | null>(null)
  const [uploadFolder, setUploadFolder] = useState('998 Attachements/')
  const [uploading, setUploading] = useState(false)
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isDirty = content !== savedContent

  // ─── Theme ────────────────────────────────────────────────────
  useEffect(() => {
    try {
      const saved = localStorage.getItem('saved-theme')
      const dark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
      setTheme(dark ? 'dark' : 'light')
      document.documentElement.classList.toggle('dark', dark)
    } catch {}
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem('saved-theme', next)
  }

  // ─── Toast ────────────────────────────────────────────────────
  const showToast = useCallback((type: Toast['type'], msg: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current)
    setToast({ type, msg })
    toastTimer.current = setTimeout(() => setToast(null), 3500)
  }, [])

  // ─── Tree ─────────────────────────────────────────────────────
  const loadTree = useCallback(async (force = false) => {
    try {
      const r = await fetch(`/api/vault/tree${force ? '?refresh=1' : ''}`)
      const data = await r.json()
      if (Array.isArray(data)) setTree(data)
    } catch {
      showToast('error', 'Failed to load vault tree')
    } finally {
      setTreeLoading(false)
    }
  }, [showToast])

  useEffect(() => { loadTree() }, [loadTree])

  // ─── Load file ────────────────────────────────────────────────
  const loadFile = useCallback(async (path: string) => {
    // Non-editable files (images, PDFs…) — just open the viewer
    if (!canEdit(path)) {
      if (isDirty) {
        const ok = window.confirm('You have unsaved changes. Discard them?')
        if (!ok) return
      }
      setSelectedPath(path)
      setViewMode('asset')
      // Fetch the SHA so we can delete if needed
      fetch(`/api/vault/file?path=${encodeURIComponent(path)}`)
        .then(r => r.ok ? r.json() : null)
        .then(d => { if (d?.sha) setSha(d.sha) })
        .catch(() => {})
      return
    }

    if (isDirty) {
      const ok = window.confirm('You have unsaved changes. Discard them?')
      if (!ok) return
    }
    setFileLoading(true)
    setViewMode('edit')
    try {
      const r = await fetch(`/api/vault/file?path=${encodeURIComponent(path)}`)
      if (!r.ok) throw new Error()
      const { content: c, sha: s } = await r.json()
      setContent(c)
      setSavedContent(c)
      setSha(s)
      setSelectedPath(path)
    } catch {
      showToast('error', 'Failed to load file')
    } finally {
      setFileLoading(false)
    }
  }, [isDirty, showToast])

  // ─── Save ─────────────────────────────────────────────────────
  const saveFile = useCallback(async () => {
    if (!selectedPath || !isDirty || saving) return
    setSaving(true)
    try {
      const r = await fetch('/api/vault/file', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: selectedPath, content, sha: sha ?? undefined }),
      })
      if (!r.ok) throw new Error()
      setSavedContent(content)
      showToast('success', 'Saved — site will rebuild in ~2 min')
    } catch {
      showToast('error', 'Failed to save — check connection')
    } finally {
      setSaving(false)
    }
  }, [selectedPath, content, sha, isDirty, saving, showToast])

  // Keyboard shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault()
        saveFile()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [saveFile])

  // ─── New file ─────────────────────────────────────────────────
  const createFile = async () => {
    const p = newFilePath.trim()
    if (!p.endsWith('.md')) {
      showToast('error', 'Path must end with .md')
      return
    }
    const title = p.split('/').pop()!.replace(/\.mdx?$/, '')
    const today = new Date().toISOString().split('T')[0]
    const starter = `---\ntitle: ${title}\ndate: ${today}\ntags: []\ndraft: false\n---\n\n`

    try {
      const r = await fetch('/api/vault/file', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: p, content: starter }),
      })
      if (!r.ok) throw new Error()
      setShowNewFile(false)
      setNewFilePath('')
      await loadTree(true)
      await loadFile(p)
      showToast('success', 'File created')
    } catch {
      showToast('error', 'Failed to create file')
    }
  }

  // ─── Delete ───────────────────────────────────────────────────
  const deleteFile = async () => {
    if (!selectedPath || !sha) return
    try {
      const r = await fetch('/api/vault/file', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: selectedPath, sha }),
      })
      if (!r.ok) throw new Error()
      setSelectedPath(null)
      setContent('')
      setSavedContent('')
      setSha(null)
      setViewMode('edit')
      setShowDelete(false)
      loadTree(true)
      showToast('success', 'File deleted')
    } catch {
      showToast('error', 'Failed to delete file')
    }
  }

  // ─── Upload ───────────────────────────────────────────────────
  const uploadAttachment = async () => {
    if (!uploadFile) return
    const safeName = uploadFile.name.replace(/[^a-zA-Z0-9._-]/g, '_')
    const folder = uploadFolder.endsWith('/') ? uploadFolder : uploadFolder + '/'
    const path = `${folder}${safeName}`

    setUploading(true)
    const form = new FormData()
    form.append('file', uploadFile)
    form.append('path', path)

    try {
      const r = await fetch('/api/vault/upload', { method: 'POST', body: form })
      const data = await r.json()
      if (!r.ok) throw new Error(data.error)
      setShowUpload(false)
      setUploadFile(null)
      showToast('success', `Uploaded → use ![[${safeName}]] to embed it`)
    } catch (e: unknown) {
      showToast('error', e instanceof Error ? e.message : 'Upload failed')
    } finally {
      setUploading(false)
    }
  }

  // ─── Logout ───────────────────────────────────────────────────
  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' }).catch(() => {})
    window.location.href = '/login'
  }

  // ─── Render ───────────────────────────────────────────────────
  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ background: 'var(--surface)', color: 'var(--text)' }}>

      {/* ── Header ─────────────────────────────────────────────── */}
      <header
        className="h-14 flex items-center justify-between px-4 shrink-0"
        style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface-elevated)' }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={() => setSidebarOpen(o => !o)}
            className="btn-ghost"
            title="Toggle sidebar (⌘B)"
          >
            <IconSidebar />
          </button>
          <span className="font-semibold text-sm tracking-tight" style={{ color: 'var(--text)' }}>
            Vault Admin
          </span>
          {selectedPath && (
            <span
              className="text-xs hidden md:block truncate max-w-xs"
              style={{ color: 'var(--muted)' }}
              title={selectedPath}
            >
              {selectedPath}
            </span>
          )}
          {isDirty && (
            <span
              className="text-xs px-2 py-0.5 rounded-full shrink-0"
              style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
            >
              unsaved
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button onClick={toggleTheme} className="btn-ghost" title="Toggle theme">
            {theme === 'dark' ? <IconSun /> : <IconMoon />}
          </button>
          <button onClick={logout} className="btn-secondary text-xs">
            Log out
          </button>
        </div>
      </header>

      {/* ── Body ───────────────────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        {sidebarOpen && (
          <aside
            className="w-64 shrink-0 flex flex-col overflow-hidden"
            style={{ borderRight: '1px solid var(--border)', background: 'var(--surface-elevated)' }}
          >
            <div
              className="p-2.5 flex gap-2 shrink-0"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              <button onClick={() => setShowNewFile(true)} className="btn-primary text-xs flex-1 justify-center">
                + New file
              </button>
              <button
                onClick={() => setShowUpload(true)}
                className="btn-secondary text-xs px-3"
                title="Upload attachment"
              >
                ↑ Upload
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-2 px-1.5">
              {treeLoading ? (
                <p className="text-xs px-2 py-3" style={{ color: 'var(--muted)' }}>
                  Loading vault…
                </p>
              ) : (
                <FileTree nodes={tree} selectedPath={selectedPath} onSelect={loadFile} />
              )}
            </div>
          </aside>
        )}

        {/* Editor area */}
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          {/* Toolbar */}
          <div
            className="h-10 flex items-center gap-2 px-3 shrink-0"
            style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface)' }}
          >
            <button
              onClick={saveFile}
              disabled={!selectedPath || !isDirty || saving}
              className="btn-primary text-xs"
            >
              {saving ? 'Saving…' : 'Save'}
              <kbd className="opacity-50 font-mono text-xs ml-0.5">⌘S</kbd>
            </button>

            <div className="flex-1" />

            {selectedPath && (
              <button
                onClick={() => setShowDelete(true)}
                className="btn-ghost text-xs"
                style={{ color: '#ef4444' }}
              >
                Delete
              </button>
            )}

            <button
              onClick={() => setPreviewOpen(o => !o)}
              className="btn-ghost text-xs"
            >
              {previewOpen ? 'Hide preview' : 'Preview'}
            </button>
          </div>

          {/* Asset viewer (images, PDFs, videos) */}
          {viewMode === 'asset' && selectedPath ? (
            <AssetViewer
              path={selectedPath}
              sha={sha}
              onDelete={() => setShowDelete(true)}
            />
          ) : (
            <>
              {/* Frontmatter panel (Obsidian-style metadata editor) */}
              {selectedPath && (
                <FrontmatterPanel content={content} onChange={setContent} />
              )}

              {/* Editor + Preview split */}
              <div className="flex-1 flex overflow-hidden">
                <div
                  className="flex-1 overflow-hidden transition-opacity duration-150"
                  style={{ opacity: fileLoading ? 0.5 : 1 }}
                >
                  {selectedPath ? (
                    <Editor
                      value={content}
                      onChange={setContent}
                      onSave={saveFile}
                      isDark={theme === 'dark'}
                      files={flattenTree(tree)}
                    />
                  ) : (
                    <EmptyState />
                  )}
                </div>

                {previewOpen && selectedPath && (
                  <div
                    className="flex-1 overflow-y-auto"
                    style={{ borderLeft: '1px solid var(--border)' }}
                  >
                    <Preview content={content} />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Toast ──────────────────────────────────────────────── */}
      {toast && (
        <div
          className="fixed bottom-5 right-5 px-4 py-3 rounded-xl text-sm font-medium shadow-lg z-50"
          style={{
            background: toast.type === 'success' ? 'var(--teal)' : '#ef4444',
            color: '#fff',
            maxWidth: '340px',
          }}
        >
          {toast.msg}
        </div>
      )}

      {/* ── New file modal ─────────────────────────────────────── */}
      {showNewFile && (
        <Modal title="New markdown file" onClose={() => setShowNewFile(false)}>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--muted)' }}>
                Path (relative to vault root)
              </label>
              <input
                className="input"
                placeholder="300 IMO + Putnam/My Note.md"
                value={newFilePath}
                onChange={e => setNewFilePath(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && createFile()}
                autoFocus
              />
              <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>
                Must end in .md — private/template folders are blocked.
              </p>
            </div>
            <div className="flex gap-2 justify-end pt-1">
              <button className="btn-secondary text-sm" onClick={() => setShowNewFile(false)}>
                Cancel
              </button>
              <button className="btn-primary text-sm" onClick={createFile}>
                Create
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* ── Upload modal ───────────────────────────────────────── */}
      {showUpload && (
        <Modal title="Upload attachment" onClose={() => setShowUpload(false)}>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--muted)' }}>
                Destination folder
              </label>
              <input
                className="input"
                value={uploadFolder}
                onChange={e => setUploadFolder(e.target.value)}
              />
              <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>
                Must stay under <code style={{ fontFamily: 'monospace' }}>998 Attachements/</code>
              </p>
            </div>

            <DropZone file={uploadFile} onFile={setUploadFile} />

            <div className="flex gap-2 justify-end pt-1">
              <button className="btn-secondary text-sm" onClick={() => { setShowUpload(false); setUploadFile(null) }}>
                Cancel
              </button>
              <button
                className="btn-primary text-sm"
                onClick={uploadAttachment}
                disabled={!uploadFile || uploading}
              >
                {uploading ? 'Uploading…' : 'Upload'}
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* ── Delete confirm ─────────────────────────────────────── */}
      {showDelete && (
        <Modal title="Delete file?" onClose={() => setShowDelete(false)}>
          <p className="text-sm mb-4" style={{ color: 'var(--text-dim)' }}>
            Permanently delete{' '}
            <strong style={{ color: 'var(--text)', wordBreak: 'break-all' }}>
              {selectedPath}
            </strong>
            ? This cannot be undone.
          </p>
          <div className="flex gap-2 justify-end">
            <button className="btn-secondary text-sm" onClick={() => setShowDelete(false)}>
              Cancel
            </button>
            <button className="btn-danger text-sm" onClick={deleteFile}>
              Delete
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}

// ─── Sub-components ────────────────────────────────────────────────

function EmptyState() {
  return (
    <div
      className="flex items-center justify-center h-full"
      style={{ color: 'var(--muted)' }}
    >
      <div className="text-center space-y-2">
        <div className="text-3xl opacity-30">✦</div>
        <p className="text-sm">Select a file to edit</p>
        <p className="text-xs opacity-70">or create a new one</p>
      </div>
    </div>
  )
}

function Modal({
  title,
  children,
  onClose,
}: {
  title: string
  children: React.ReactNode
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="card w-full max-w-md p-6"
        onClick={e => e.stopPropagation()}
        style={{ boxShadow: 'var(--shadow-soft)' }}
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-semibold" style={{ color: 'var(--text)' }}>
            {title}
          </h3>
          <button className="btn-ghost text-sm" onClick={onClose}>✕</button>
        </div>
        {children}
      </div>
    </div>
  )
}

function DropZone({
  file,
  onFile,
}: {
  file: File | null
  onFile: (f: File | null) => void
}) {
  return (
    <div
      className="rounded-xl p-8 text-center cursor-pointer transition-all duration-150"
      style={{
        border: `2px dashed ${file ? 'var(--teal)' : 'var(--border)'}`,
        background: file ? 'rgba(15,118,110,0.05)' : 'var(--surface-muted)',
      }}
      onDragOver={e => { e.preventDefault(); e.currentTarget.style.borderColor = 'var(--accent)' }}
      onDragLeave={e => { e.currentTarget.style.borderColor = file ? 'var(--teal)' : 'var(--border)' }}
      onDrop={e => {
        e.preventDefault()
        const f = e.dataTransfer.files[0]
        if (f) onFile(f)
        e.currentTarget.style.borderColor = 'var(--teal)'
      }}
      onClick={() => document.getElementById('va-file-input')?.click()}
    >
      <input
        id="va-file-input"
        type="file"
        className="hidden"
        accept=".pdf,.png,.jpg,.jpeg,.gif,.svg,.webp,.mp4,.zip"
        onChange={e => onFile(e.target.files?.[0] ?? null)}
      />
      {file ? (
        <div className="space-y-1">
          <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>
            {file.name}
          </p>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            {(file.size / 1024).toFixed(1)} KB
          </p>
        </div>
      ) : (
        <div className="space-y-1">
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            Drag & drop a file here
          </p>
          <p className="text-xs" style={{ color: 'var(--muted)', opacity: 0.7 }}>
            PDF, PNG, JPG, SVG, MP4, ZIP — max 25 MB
          </p>
        </div>
      )}
    </div>
  )
}

// ─── Icons (inline SVG) ────────────────────────────────────────────

function IconSidebar() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18" />
    </svg>
  )
}

function IconSun() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function IconMoon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
