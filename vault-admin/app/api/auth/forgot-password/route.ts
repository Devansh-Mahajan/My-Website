import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { signResetToken } from '@/lib/auth'
import { sendResetEmail } from '@/lib/email'
import { rateLimit } from '@/lib/rate-limit'

const schema = z.object({ email: z.string().email() })

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
  // 3 requests per hour per IP to prevent email flooding
  const rl = rateLimit(`forgot:${ip}`, 3, 60 * 60 * 1000)
  if (!rl.allowed) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const body = await req.json().catch(() => null)
  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  // Always return success to prevent email enumeration
  if (parsed.data.email === process.env.ADMIN_EMAIL) {
    try {
      const token = await signResetToken(parsed.data.email)
      const base = process.env.NEXT_PUBLIC_BASE_URL ?? ''
      await sendResetEmail(parsed.data.email, `${base}/reset-password?token=${token}`)
    } catch (err) {
      console.error('Failed to send reset email:', err)
    }
  }

  return NextResponse.json({ ok: true })
}
