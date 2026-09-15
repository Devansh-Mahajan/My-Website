import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { verifyResetToken, hashPassword } from '@/lib/auth'
import { sendNewHashEmail } from '@/lib/email'

const schema = z.object({
  token: z.string().min(1),
  password: z.string().min(12).max(128),
})

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Password must be at least 12 characters' },
      { status: 400 },
    )
  }

  try {
    const payload = await verifyResetToken(parsed.data.token)
    const newHash = await hashPassword(parsed.data.password)
    const to = String(payload.email ?? process.env.ADMIN_EMAIL ?? '')
    await sendNewHashEmail(to, newHash)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Invalid or expired reset link' }, { status: 400 })
  }
}
