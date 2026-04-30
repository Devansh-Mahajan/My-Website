import { NextRequest, NextResponse } from 'next/server'
import { readBinary } from '@/lib/github'
import { canView, getContentType } from '@/lib/vault-paths'

export async function GET(req: NextRequest) {
  if (!req.cookies.has('vault-session')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const path = req.nextUrl.searchParams.get('path') ?? ''
  if (!canView(path)) {
    return NextResponse.json({ error: 'Invalid or disallowed path' }, { status: 400 })
  }

  try {
    const { buffer } = await readBinary(path)
    const filename = path.split('/').pop() ?? 'file'

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': getContentType(path),
        'Content-Length': String(buffer.byteLength),
        'Content-Disposition': `inline; filename="${filename}"`,
        'Cache-Control': 'private, max-age=300',
      },
    })
  } catch {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }
}
