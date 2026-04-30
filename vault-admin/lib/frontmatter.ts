export interface Frontmatter {
  title?: string
  date?: string
  tags?: string[]
  draft?: boolean
  [key: string]: unknown
}

// Parse frontmatter and return it + the body after the closing ---
export function parseFrontmatter(content: string): { fm: Frontmatter; body: string } {
  if (!content.startsWith('---')) return { fm: {}, body: content }

  const end = content.indexOf('\n---', 3)
  if (end === -1) return { fm: {}, body: content }

  const yaml = content.slice(4, end) // skip opening ---\n
  const body = content.slice(end + 4) // skip closing \n---

  const fm: Frontmatter = {}

  for (const line of yaml.split('\n')) {
    const colon = line.indexOf(':')
    if (colon === -1) continue
    const key = line.slice(0, colon).trim()
    const val = line.slice(colon + 1).trim()

    switch (key) {
      case 'title':
        fm.title = val.replace(/^["']|["']$/g, '')
        break
      case 'date':
        fm.date = val.replace(/^["']|["']$/g, '')
        break
      case 'draft':
        fm.draft = val === 'true'
        break
      case 'tags': {
        // Inline array: tags: [a, b] or tags: a, b
        const inlineBracket = val.match(/^\[([^\]]*)\]$/)
        if (inlineBracket) {
          fm.tags = inlineBracket[1]
            .split(',')
            .map(t => t.trim().replace(/^["']|["']$/g, ''))
            .filter(Boolean)
        } else if (val) {
          fm.tags = val.split(',').map(t => t.trim().replace(/^["']|["']$/g, '')).filter(Boolean)
        } else {
          fm.tags = []
        }
        break
      }
      default:
        if (key) fm[key] = val
    }
  }

  // Handle block list tags (- item)
  const tagBlock = yaml.match(/^tags:\s*\n((?:\s*-\s*.+\n?)+)/m)
  if (tagBlock) {
    fm.tags = tagBlock[1]
      .split('\n')
      .map(l => l.replace(/^\s*-\s*/, '').trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean)
  }

  return { fm, body }
}

// Rebuild full content from edited frontmatter + existing body
export function serializeFrontmatter(fm: Frontmatter, body: string): string {
  const lines: string[] = ['---']

  if (fm.title !== undefined) lines.push(`title: ${fm.title}`)
  if (fm.date !== undefined) lines.push(`date: ${fm.date}`)
  if (fm.tags !== undefined) lines.push(`tags: [${fm.tags.join(', ')}]`)
  if (fm.draft !== undefined) lines.push(`draft: ${fm.draft}`)

  // Preserve unknown keys
  for (const [k, v] of Object.entries(fm)) {
    if (!['title', 'date', 'tags', 'draft'].includes(k)) {
      lines.push(`${k}: ${v}`)
    }
  }

  lines.push('---')
  lines.push('')

  return lines.join('\n') + body.replace(/^\n+/, '')
}
