import { NextRequest, NextResponse } from 'next/server'
import { uploadBinary, readFile } from '@/lib/github'
import { canUpload } from '@/lib/vault-paths'

const MAX_BYTES = 25 * 1024 * 1024 // 25 MB

export async function POST(req: NextRequest) {
  if (!req.cookies.has('vault-session')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const form = await req.formData().catch(() => null)
  if (!form) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })

  const file = form.get('file') as File | null
  const path = form.get('path') as string | null

  if (!file || !path) {
    return NextResponse.json({ error: 'Missing file or path' }, { status: 400 })
  }
  if (!canUpload(path)) {
    return NextResponse.json({ error: 'Invalid upload path' }, { status: 400 })
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: 'File exceeds 25 MB limit' }, { status: 413 })
  }

  const buf = Buffer.from(await file.arrayBuffer())

  // If the file already exists, pass its SHA so we update rather than conflict
  let sha: string | undefined
  try {
    const existing = await readFile(path)
    sha = existing.sha
  } catch {
    // New file — no SHA needed
  }

  try {
    await uploadBinary(path, buf, `vault-admin: upload ${path}`, sha)
    return NextResponse.json({ ok: true, path })
  } catch (err) {
    console.error('Upload failed:', err)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
