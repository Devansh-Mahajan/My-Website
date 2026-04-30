import { NextRequest, NextResponse } from 'next/server'
import { Octokit } from '@octokit/rest'
import { canView } from '@/lib/vault-paths'

const OWNER = process.env.GITHUB_REPO_OWNER!
const REPO = process.env.GITHUB_REPO_NAME!

function client() {
  return new Octokit({ auth: process.env.GITHUB_PAT })
}

export async function GET(req: NextRequest) {
  if (!req.cookies.has('vault-session')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const path = req.nextUrl.searchParams.get('path') ?? ''
  if (!canView(path)) {
    return NextResponse.json({ error: 'Invalid or disallowed path' }, { status: 400 })
  }

  try {
    const { data } = await client().repos.getContent({
      owner: OWNER,
      repo: REPO,
      path,
      ref: 'main',
    })
    if (Array.isArray(data) || data.type !== 'file') throw new Error('Not a file')
    if (!data.download_url) throw new Error('No download URL')

    // Redirect to GitHub's CDN — no size limits, no 4.5 MB serverless cap
    return NextResponse.redirect(data.download_url)
  } catch {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }
}
