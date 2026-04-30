'use client'

import { useState, useRef, KeyboardEvent } from 'react'
import { parseFrontmatter, serializeFrontmatter, type Frontmatter } from '@/lib/frontmatter'

interface Props {
  content: string
  onChange: (content: string) => void
}

export function FrontmatterPanel({ content, onChange }: Props) {
  const { fm, body } = parseFrontmatter(content)
  const [tagInput, setTagInput] = useState('')
  const tagRef = useRef<HTMLInputElement>(null)

  function updateFm(patch: Partial<Frontmatter>) {
    const next = { ...fm, ...patch }
    onChange(serializeFrontmatter(next, body))
  }

  function addTag(raw: string) {
    const tag = raw.trim().replace(/^#+/, '').toLowerCase().replace(/\s+/g, '-')
    if (!tag) return
    const tags = fm.tags ?? []
    if (tags.includes(tag)) { setTagInput(''); return }
    updateFm({ tags: [...tags, tag] })
    setTagInput('')
  }

  function removeTag(tag: string) {
    updateFm({ tags: (fm.tags ?? []).filter(t => t !== tag) })
  }

  function tagKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      addTag(tagInput)
    } else if (e.key === 'Backspace' && !tagInput && fm.tags?.length) {
      removeTag(fm.tags[fm.tags.length - 1])
    }
  }

  if (!content.startsWith('---')) return null

  const today = new Date().toISOString().split('T')[0]

  return (
    <div
      className="shrink-0 px-4 py-2.5 flex flex-wrap items-center gap-x-4 gap-y-2"
      style={{
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface-elevated)',
        fontSize: '13px',
      }}
    >
      {/* Title */}
      <div className="flex items-center gap-2 min-w-0">
        <span style={{ color: 'var(--muted)', fontWeight: 500, whiteSpace: 'nowrap' }}>Title</span>
        <input
          className="bg-transparent border-0 outline-none min-w-0 w-48 font-medium"
          style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}
          value={fm.title ?? ''}
          onChange={e => updateFm({ title: e.target.value })}
          placeholder="Untitled"
        />
      </div>

      {/* Date */}
      <div className="flex items-center gap-2">
        <span style={{ color: 'var(--muted)', fontWeight: 500 }}>Date</span>
        <input
          type="date"
          className="bg-transparent border-0 outline-none text-xs"
          style={{ color: 'var(--text-dim)', borderBottom: '1px solid var(--border)', cursor: 'pointer' }}
          value={fm.date ?? today}
          onChange={e => updateFm({ date: e.target.value })}
        />
      </div>

      {/* Tags */}
      <div className="flex items-center gap-1.5 flex-wrap min-w-0">
        <span style={{ color: 'var(--muted)', fontWeight: 500 }}>Tags</span>
        {(fm.tags ?? []).map(tag => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
            style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
          >
            #{tag}
            <button
              onClick={() => removeTag(tag)}
              className="opacity-60 hover:opacity-100 leading-none"
              style={{ fontSize: '11px' }}
            >
              ×
            </button>
          </span>
        ))}
        <input
          ref={tagRef}
          className="bg-transparent border-0 outline-none text-xs"
          style={{
            color: 'var(--text-dim)',
            borderBottom: '1px dashed var(--border)',
            width: tagInput ? `${tagInput.length + 4}ch` : '6ch',
            minWidth: '6ch',
          }}
          placeholder="+ tag"
          value={tagInput}
          onChange={e => setTagInput(e.target.value)}
          onKeyDown={tagKeyDown}
          onBlur={() => { if (tagInput) addTag(tagInput) }}
        />
      </div>

      {/* Draft toggle */}
      <label className="flex items-center gap-1.5 cursor-pointer select-none ml-auto">
        <span style={{ color: 'var(--muted)', fontWeight: 500 }}>Draft</span>
        <div
          className="relative inline-flex items-center"
          style={{ width: '28px', height: '16px' }}
        >
          <input
            type="checkbox"
            className="sr-only"
            checked={fm.draft ?? false}
            onChange={e => updateFm({ draft: e.target.checked })}
          />
          <div
            className="w-full h-full rounded-full transition-colors duration-150"
            style={{ background: fm.draft ? 'var(--accent)' : 'var(--border-strong)' }}
          />
          <div
            className="absolute top-0.5 rounded-full transition-all duration-150"
            style={{
              width: '12px',
              height: '12px',
              background: '#fff',
              left: fm.draft ? '14px' : '2px',
            }}
          />
        </div>
      </label>
    </div>
  )
}
