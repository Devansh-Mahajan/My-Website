import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { readFile, readBinary, writeFile, deleteFile } from '@/lib/github'
import { canEdit, canView } from '@/lib/vault-paths'

function authed(req: NextRequest) {
  return req.cookies.has('vault-session')
}

// GET /api/vault/file?path=xxx
// For editable files: returns { content, sha }
// For viewable assets: returns { sha } only (so the UI can offer delete)
export async function GET(req: NextRequest) {
  if (!authed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const path = req.nextUrl.searchParams.get('path') ?? ''

  if (canEdit(path)) {
    try {
      const { content, sha } = await readFile(path)
      return NextResponse.json({ content, sha })
    } catch {
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }
  }

  if (canView(path)) {
    try {
      const { sha } = await readBinary(path)
      return NextResponse.json({ sha })
    } catch {
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }
  }

  return NextResponse.json({ error: 'Invalid or disallowed path' }, { status: 400 })
}

// PUT /api/vault/file — create or update
const writeSchema = z.object({
  path: z.string().min(1),
  content: z.string(),
  sha: z.string().optional(),
  message: z.string().optional(),
})

export async function PUT(req: NextRequest) {
  if (!authed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json().catch(() => null)
  const parsed = writeSchema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 })

  const { path, content, sha, message } = parsed.data
  if (!canEdit(path)) {
    return NextResponse.json({ error: 'Invalid or disallowed path' }, { status: 400 })
  }

  try {
    await writeFile(path, content, message ?? `vault-admin: update ${path}`, sha)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Write failed:', err)
    return NextResponse.json({ error: 'Failed to save file' }, { status: 500 })
  }
}

// DELETE /api/vault/file
const deleteSchema = z.object({
  path: z.string().min(1),
  sha: z.string().min(1),
})

export async function DELETE(req: NextRequest) {
  if (!authed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json().catch(() => null)
  const parsed = deleteSchema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 })

  const { path, sha } = parsed.data
  if (!canEdit(path) && !canView(path)) {
    return NextResponse.json({ error: 'Invalid or disallowed path' }, { status: 400 })
  }

  try {
    await deleteFile(path, sha, `vault-admin: delete ${path}`)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Delete failed:', err)
    return NextResponse.json({ error: 'Failed to delete file' }, { status: 500 })
  }
}
