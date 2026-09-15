'use client'

import { useState } from 'react'

export type TreeNode = {
  name: string
  path: string
  type: 'blob' | 'tree'
  children?: TreeNode[]
}

interface Props {
  nodes: TreeNode[]
  selectedPath: string | null
  onSelect: (path: string) => void
  depth?: number
}

function fileIcon(name: string): string {
  const e = name.slice(name.lastIndexOf('.')).toLowerCase()
  if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'].includes(e)) return '🖼'
  if (e === '.pdf') return '📄'
  if (['.mp4', '.mov'].includes(e)) return '🎬'
  if (e === '.zip') return '📦'
  return '·'
}

export function FileTree({ nodes, selectedPath, onSelect, depth = 0 }: Props) {
  if (!nodes.length) return null
  return (
    <ul className="space-y-px">
      {nodes.map(node => (
        <TreeItem
          key={node.path}
          node={node}
          selectedPath={selectedPath}
          onSelect={onSelect}
          depth={depth}
        />
      ))}
    </ul>
  )
}

function TreeItem({
  node,
  selectedPath,
  onSelect,
  depth,
}: {
  node: TreeNode
  selectedPath: string | null
  onSelect: (path: string) => void
  depth: number
}) {
  const [open, setOpen] = useState(depth === 0)
  const isSelected = node.path === selectedPath
  const indent = 8 + depth * 14

  if (node.type === 'tree') {
    return (
      <li>
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center gap-1.5 w-full text-left py-1 rounded-md text-sm transition-colors duration-100"
          style={{
            paddingLeft: `${indent}px`,
            paddingRight: '8px',
            color: 'var(--text)',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--surface-muted)')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
        >
          <span
            className="shrink-0 text-xs transition-transform duration-150"
            style={{ color: 'var(--muted)', display: 'inline-block', transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            ▸
          </span>
          <span className="font-medium truncate leading-5">{node.name}</span>
        </button>
        {open && node.children && (
          <FileTree
            nodes={node.children}
            selectedPath={selectedPath}
            onSelect={onSelect}
            depth={depth + 1}
          />
        )}
      </li>
    )
  }

  return (
    <li>
      <button
        onClick={() => onSelect(node.path)}
        title={node.path}
        className="flex items-center gap-1.5 w-full text-left py-1 rounded-md text-sm transition-colors duration-100 truncate"
        style={{
          paddingLeft: `${indent}px`,
          paddingRight: '8px',
          color: isSelected ? 'var(--accent)' : 'var(--text-dim)',
          background: isSelected ? 'var(--accent-soft)' : 'transparent',
          fontWeight: isSelected ? 500 : 400,
        }}
        onMouseEnter={e => {
          if (!isSelected)(e.currentTarget as HTMLElement).style.background = 'var(--surface-muted)'
        }}
        onMouseLeave={e => {
          if (!isSelected)(e.currentTarget as HTMLElement).style.background = 'transparent'
        }}
      >
        <span className="shrink-0 text-xs leading-none" aria-hidden="true">{fileIcon(node.name)}</span>
        <span className="truncate">{node.name.replace(/\.(md|mdx)$/, '')}</span>
      </button>
    </li>
  )
}
