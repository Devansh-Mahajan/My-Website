import { NextRequest, NextResponse } from 'next/server'
import { getTree } from '@/lib/github'
import { canEdit, canUpload, EXCLUDED_TOPS } from '@/lib/vault-paths'

type Node = {
  name: string
  path: string
  type: 'blob' | 'tree'
  children?: Node[]
}

function buildTree(items: { path?: string; type?: string }[]): Node[] {
  const nodes = new Map<string, Node>()
  const roots: Node[] = []

  const filtered = items
    .filter(i => {
      if (!i.path || !i.type) return false
      const top = i.path.split('/')[0]
      if (EXCLUDED_TOPS.has(top)) return false
      if (i.type === 'blob' && !canEdit(i.path) && !canUpload(i.path)) return false
      return true
    })
    .sort((a, b) => {
      // Directories before files, then alphabetically
      if (a.type !== b.type) return a.type === 'tree' ? -1 : 1
      return (a.path ?? '').localeCompare(b.path ?? '')
    })

  for (const item of filtered) {
    const parts = item.path!.split('/')
    const node: Node = {
      name: parts[parts.length - 1],
      path: item.path!,
      type: item.type as 'blob' | 'tree',
      children: item.type === 'tree' ? [] : undefined,
    }
    nodes.set(item.path!, node)

    if (parts.length === 1) {
      roots.push(node)
    } else {
      const parentPath = parts.slice(0, -1).join('/')
      nodes.get(parentPath)?.children?.push(node)
    }
  }

  return roots
}

// Module-level cache — reset on force-refresh or after TTL
let cache: { data: Node[]; at: number } | null = null
const TTL = 30_000

export async function GET(req: NextRequest) {
  if (!req.cookies.has('vault-session')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const forceRefresh = req.nextUrl.searchParams.has('refresh')
  const now = Date.now()

  if (!forceRefresh && cache && now - cache.at < TTL) {
    return NextResponse.json(cache.data)
  }

  try {
    const flat = await getTree()
    const tree = buildTree(flat)
    cache = { data: tree, at: now }
    return NextResponse.json(tree)
  } catch (err) {
    console.error('Tree fetch failed:', err)
    return NextResponse.json({ error: 'Failed to fetch vault tree' }, { status: 500 })
  }
}
