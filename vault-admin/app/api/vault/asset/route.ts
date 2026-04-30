import { NextRequest, NextResponse } from 'next/server'
import { canView, getContentType } from '@/lib/vault-paths'

export const runtime = 'edge'

const OWNER = process.env.GITHUB_REPO_OWNER!
const REPO = process.env.GITHUB_REPO_NAME!
const BASE = `https://api.github.com/repos/${OWNER}/${REPO}`

function ghHeaders(accept = 'application/vnd.github+json') {
  return {
    Authorization: `Bearer ${process.env.GITHUB_PAT}`,
    Accept: accept,
  }
}

export async function GET(req: NextRequest) {
  if (!req.cookies.has('vault-session')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const path = req.nextUrl.searchParams.get('path') ?? ''
  if (!canView(path)) {
    return NextResponse.json({ error: 'Invalid or disallowed path' }, { status: 400 })
  }

  const encodedPath = path.split('/').map(encodeURIComponent).join('/')
  const filename = path.split('/').pop() ?? 'file'

  try {
    // Step 1: get file metadata (SHA) — works regardless of file size
    const metaResp = await fetch(`${BASE}/contents/${encodedPath}?ref=main`, {
      headers: ghHeaders(),
    })
    if (!metaResp.ok) throw new Error(`meta ${metaResp.status}`)
    const meta = await metaResp.json()
    if (meta.type !== 'file') throw new Error('not a file')

    // Step 2: stream raw bytes via Git Blobs API — supports up to 100 MB
    const blobResp = await fetch(`${BASE}/git/blobs/${meta.sha}`, {
      headers: ghHeaders('application/vnd.github.raw'),
    })
    if (!blobResp.ok) throw new Error(`blob ${blobResp.status}`)

    return new NextResponse(blobResp.body, {
      headers: {
        'Content-Type': getContentType(path),
        'Content-Disposition': `inline; filename="${filename}"`,
        'Cache-Control': 'private, max-age=300',
      },
    })
  } catch {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }
}
