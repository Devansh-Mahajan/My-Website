import {
  MatchDecorator,
  Decoration,
  ViewPlugin,
  ViewUpdate,
  DecorationSet,
  EditorView,
} from '@codemirror/view'
import {
  autocompletion,
  CompletionContext,
  CompletionResult,
} from '@codemirror/autocomplete'

const WIKILINK_RE = /\[\[([^\]|#]+)(?:[|#][^\]]*)?\]\]/g
const TAG_RE = /(^|\s)(#[a-zA-Z][a-zA-Z0-9/_-]*)/g

// ── Wikilink decorations ──────────────────────────────────────────
const wikilinkMark = Decoration.mark({ class: 'cm-wikilink' })
const tagMark = Decoration.mark({ class: 'cm-hashtag' })

const wikilinkMatcher = new MatchDecorator({ regexp: WIKILINK_RE, decoration: () => wikilinkMark })
const tagMatcher = new MatchDecorator({ regexp: TAG_RE, decoration: () => tagMark })

const wikilinkPlugin = ViewPlugin.fromClass(
  class {
    decorations: DecorationSet
    constructor(view: EditorView) {
      this.decorations = wikilinkMatcher.createDeco(view)
    }
    update(u: ViewUpdate) {
      this.decorations = wikilinkMatcher.updateDeco(u, this.decorations)
    }
  },
  { decorations: v => v.decorations },
)

const tagPlugin = ViewPlugin.fromClass(
  class {
    decorations: DecorationSet
    constructor(view: EditorView) {
      this.decorations = tagMatcher.createDeco(view)
    }
    update(u: ViewUpdate) {
      this.decorations = tagMatcher.updateDeco(u, this.decorations)
    }
  },
  { decorations: v => v.decorations },
)

// ── Wikilink autocomplete ─────────────────────────────────────────
function wikilinkSource(files: string[]) {
  const mdFiles = files.filter(f => /\.mdx?$/.test(f))

  return (ctx: CompletionContext): CompletionResult | null => {
    const match = ctx.matchBefore(/\[\[[^\]]*/)
    if (!match || (!ctx.explicit && match.text.length < 3)) return null

    const query = match.text.slice(2).toLowerCase()

    const options = mdFiles
      .map(path => {
        const parts = path.split('/')
        const name = parts.pop()!.replace(/\.mdx?$/, '')
        const folder = parts.join('/')
        return { name, folder, path }
      })
      .filter(({ name, folder }) =>
        !query || name.toLowerCase().includes(query) || folder.toLowerCase().includes(query),
      )
      .map(({ name, folder, path }) => ({
        label: name,
        apply: name + ']]',
        type: 'keyword' as const,
        detail: folder || undefined,
        info: path,
      }))

    return { from: match.from + 2, options, filter: false }
  }
}

// ── Theme ─────────────────────────────────────────────────────────
const obsidianTheme = EditorView.baseTheme({
  '.cm-wikilink': {
    color: 'var(--accent)',
    backgroundColor: 'var(--accent-soft)',
    borderRadius: '3px',
    padding: '0 2px',
    cursor: 'pointer',
  },
  '.cm-hashtag': {
    color: 'var(--teal)',
    fontWeight: '500',
  },
  '.cm-tooltip-autocomplete': {
    border: '1px solid var(--border) !important',
    borderRadius: '8px !important',
    background: 'var(--surface-elevated) !important',
    boxShadow: 'var(--shadow-soft) !important',
    fontSize: '13px',
  },
  '.cm-tooltip-autocomplete ul li[aria-selected]': {
    background: 'var(--accent-soft) !important',
    color: 'var(--accent) !important',
  },
})

// ── Public API ────────────────────────────────────────────────────
export function obsidianExtensions(files: string[]) {
  return [
    wikilinkPlugin,
    tagPlugin,
    autocompletion({ override: [wikilinkSource(files)], closeOnBlur: true }),
    obsidianTheme,
  ]
}
