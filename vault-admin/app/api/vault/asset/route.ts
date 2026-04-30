import { NextRequest, NextResponse } from 'next/server'
import { canView, getContentType } from '@/lib/vault-paths'

export const runtime = 'edge'

const OWNER = process.env.GITHUB_REPO_OWNER!
const REPO = process.env.GITHUB_REPO_NAME!

export async function GET(req: NextRequest) {
  if (!req.cookies.has('vault-session')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const path = req.nextUrl.searchParams.get('path') ?? ''
  if (!canView(path)) {
    return NextResponse.json({ error: 'Invalid or disallowed path' }, { status: 400 })
  }

  // Encode each path segment to handle spaces and special chars
  const encodedPath = path.split('/').map(encodeURIComponent).join('/')
  const filename = path.split('/').pop() ?? 'file'

  try {
    // application/vnd.github.raw returns raw bytes — stream directly to browser
    const resp = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/contents/${encodedPath}?ref=main`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_PAT}`,
          Accept: 'application/vnd.github.raw',
        },
      }
    )
    if (!resp.ok) throw new Error(`GitHub: ${resp.status}`)

    return new NextResponse(resp.body, {
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
