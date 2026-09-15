import { SignJWT, jwtVerify } from 'jose'
import bcrypt from 'bcryptjs'

const secret = () => new TextEncoder().encode(process.env.JWT_SECRET!)
const resetSecret = () => new TextEncoder().encode(process.env.JWT_SECRET! + ':reset')

export const COOKIE = 'vault-session'

export const COOKIE_OPTS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  path: '/',
  maxAge: 60 * 60 * 24 * 7,
} as const

export async function hashPassword(pw: string) {
  return bcrypt.hash(pw, 12)
}

export async function verifyPassword(pw: string, hash: string) {
  return bcrypt.compare(pw, hash)
}

export async function signSession() {
  return new SignJWT({ role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret())
}

export async function verifySession(token: string) {
  const { payload } = await jwtVerify(token, secret())
  return payload
}

export async function signResetToken(email: string) {
  return new SignJWT({ email, purpose: 'password-reset' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('15m')
    .sign(resetSecret())
}

export async function verifyResetToken(token: string) {
  const { payload } = await jwtVerify(token, resetSecret())
  if (payload.purpose !== 'password-reset') throw new Error('Invalid token type')
  return payload
}
