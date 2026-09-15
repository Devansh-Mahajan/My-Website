import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { verifyPassword, signSession, COOKIE, COOKIE_OPTS } from '@/lib/auth'
import { rateLimit } from '@/lib/rate-limit'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1).max(256),
})

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
  const rl = rateLimit(`login:${ip}`, 10, 15 * 60 * 1000)

  if (!rl.allowed) {
    return NextResponse.json(
      { error: 'Too many attempts. Try again in 15 minutes.' },
      { status: 429, headers: { 'Retry-After': String(rl.retryAfter) } },
    )
  }

  const body = await req.json().catch(() => null)
  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }

  const { email, password } = parsed.data
  const adminEmail = process.env.ADMIN_EMAIL ?? ''
  const passwordHash = process.env.ADMIN_PASSWORD_HASH ?? ''

  if (!passwordHash) {
    return NextResponse.json(
      { error: 'Admin not configured. Run: npm run setup' },
      { status: 503 },
    )
  }

  // Always run bcrypt even on email mismatch to prevent timing attacks
  const emailOk = email === adminEmail
  const pwOk = await verifyPassword(password, passwordHash)

  if (!emailOk || !pwOk) {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
  }

  const token = await signSession()
  const res = NextResponse.json({ ok: true })
  res.cookies.set(COOKIE, token, COOKIE_OPTS)
  return res
}
