type Record = { count: number; resetAt: number }

const store = new Map<string, Record>()

export function rateLimit(
  key: string,
  max = 10,
  windowMs = 15 * 60 * 1000,
): { allowed: boolean; remaining: number; retryAfter?: number } {
  const now = Date.now()
  const rec = store.get(key)

  if (!rec || now > rec.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs })
    return { allowed: true, remaining: max - 1 }
  }

  if (rec.count >= max) {
    return {
      allowed: false,
      remaining: 0,
      retryAfter: Math.ceil((rec.resetAt - now) / 1000),
    }
  }

  rec.count++
  return { allowed: true, remaining: max - rec.count }
}

// Prune expired entries periodically to avoid unbounded growth
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    for (const [k, v] of store) {
      if (now > v.resetAt) store.delete(k)
    }
  }, 10 * 60 * 1000)
}
