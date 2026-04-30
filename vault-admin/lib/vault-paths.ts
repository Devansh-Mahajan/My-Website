// Directories excluded from Quartz sync — mirroring deploy.yml exclusions
const EXCLUDED_TOPS = new Set([
  'Blog',
  '999 Templates',
  '900 Private Notes',
  '000 ToDo',
  '100 Notes',
  'private',
  'templates',
  '.obsidian',
  '.github',
  '.git',
  'vault-admin',
])

const EDIT_EXTS = new Set(['.md', '.mdx'])
const UPLOAD_EXTS = new Set(['.pdf', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.mp4', '.zip'])

function noTraversal(path: string) {
  return path.length > 0 && !path.includes('..') && !path.startsWith('/')
}

export function canEdit(path: string): boolean {
  if (!noTraversal(path)) return false
  const ext = path.slice(path.lastIndexOf('.')).toLowerCase()
  if (!EDIT_EXTS.has(ext)) return false
  return !EXCLUDED_TOPS.has(path.split('/')[0])
}

export function canUpload(path: string): boolean {
  if (!noTraversal(path)) return false
  if (!path.startsWith('998 Attachements/')) return false
  const ext = path.slice(path.lastIndexOf('.')).toLowerCase()
  return UPLOAD_EXTS.has(ext)
}

export { EXCLUDED_TOPS }
